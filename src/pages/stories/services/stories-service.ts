import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  FirestoreDataConverter,
  getDoc,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from '@angular/fire/firestore';
import { StoryModel } from '../models/storyModel';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

const storyConverter: FirestoreDataConverter<StoryModel> = {
  toFirestore(story: StoryModel): DocumentData {
    return {
      title: story.title,
      content: story.content,
      tags: story.tags ?? [],
      imageBase64: story.imageBase64 ?? null,
      createdAt: story.createdAt ? Timestamp.fromDate(story.createdAt) : serverTimestamp(),
      updatedAt: serverTimestamp(),
      contentType: story.contentType ?? null,
    };
  },
  fromFirestore(snapshot, options): StoryModel {
    const data = snapshot.data(options) as any;
    return {
      id: snapshot.id,
      title: data.title,
      content: data.content,
      tags: data.tags ?? [],
      imageBase64: data.imageBase64 ?? undefined,
      createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(),
      updatedAt: data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : new Date(),
      likes: data.likes ?? 0,
      views: data.views ?? 0,
      contentType: data.contentType ?? undefined,
    };
  },
};

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  private fs = inject(Firestore);
  private colRef = collection(this.fs, 'stories').withConverter(
    storyConverter
  ) as CollectionReference<StoryModel>;

  private stories$: Observable<StoryModel[]> = collectionData(
    query(this.colRef, orderBy('createdAt', 'desc'))
  ).pipe(map((docs) => docs as StoryModel[]));

  readonly stories = toSignal(this.stories$, { initialValue: [] as StoryModel[] });

  async add(story: Omit<StoryModel, 'id' | 'createdAt' | 'updatedAt'>) {
    await addDoc(this.colRef, {
      ...story,
      tags: story.tags ?? [],
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '' as any,
    } as StoryModel);
  }

  async update(id: string, patch: Partial<StoryModel>) {
    await updateDoc(doc(this.colRef, id), {
      ...patch,
      updatedAt: serverTimestamp(),
    } as any);
  }

  async remove(id: string) {
    await deleteDoc(doc(this.colRef, id));
  }
  async getStoryById(id: string): Promise<StoryModel | undefined> {
    const storyDoc = doc(this.colRef, id);
    const snapshot = await getDoc(storyDoc);
    return snapshot.exists() ? (snapshot.data() as StoryModel) : undefined;
  }
}
