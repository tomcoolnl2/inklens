import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Model } from '@inklens/common';

@Controller()
export class AppController {
	//
	constructor(private readonly appService: AppService) {}

	@Get()
	public getAllTags() {
		return this.appService.getAllTags();
	}

	@Get()
	public getTagById(tagId: string): Model.Tag {
		return this.appService.getTagById(tagId);
	}

	@Post()
	public createTag(tagData: Model.Tag): Model.Tag {
		return this.appService.createTag(tagData);
	}

	@Put()
	public updateTag(tagId: string, tagData: Model.Tag): number {
		return this.appService.updateTag(tagId, tagData);
	}

	@Delete()
	public deleteTag(tagId: string): number {
		return this.appService.deleteTag(tagId);
	}
}
