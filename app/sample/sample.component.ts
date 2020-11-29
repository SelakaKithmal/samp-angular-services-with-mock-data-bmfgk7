import { Component, OnInit} from '@angular/core';
import { ServersService } from './../shared/servers.service';
import { ContentService } from './../shared/content.service';
import { Servers } from './servers-class.component';
import { Content } from './content-class.component';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: [
    './sample.component.scss'
  ]
})

export class Sample implements OnInit {

  title = 'Sample';
  servers: Servers[];
  content: Content[];

  constructor(
    private serversService: ServersService,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.getServers();
    this.getContent();
  }

  getServers(): void {
    this.serversService.getServers().subscribe(servers => this.servers = servers)
  }

  getContent(): void {
    this.contentService.getContent().subscribe(content => this.content = content)
  }
}