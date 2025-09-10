import { Component } from '@angular/core';

@Component({
  selector: 'app-keyskills',
  imports: [],
  templateUrl: './keyskills.html',
  styleUrl: './keyskills.scss'
})
export class Keyskills {
public skills: {text:string, icon:string}[] = [
    {text: '.Net Framework', icon: 'dotnet-icon'},
    {text: 'CSharp', icon: 'csharp-icon'},
    {text: 'SQL', icon: 'sql-icon'},
    {text: 'Angular', icon: 'angular-icon'},
    {text: 'React', icon: 'react-icon'},
    {text: 'Node.js', icon: 'nodejs-icon'},
    {text: 'TypeScript', icon: 'typescript-icon'},
    {text: 'JavaScript', icon: 'javascript-icon'},
];
}
