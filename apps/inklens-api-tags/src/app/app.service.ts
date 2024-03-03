import { Injectable } from '@nestjs/common';
import { Model } from '@inklens/common';

@Injectable()
export class AppService {
	//
	public getAllTags(): Model.Tag[] {
		return [
			{
				id: 0,
				name: 'Tag 1',
				slug: '/tag1',
			},
			{
				id: 1,
				name: 'Tag 2',
				slug: '/tag2',
			},
			{
				id: 2,
				name: 'Tag 3',
				slug: '/tag3',
			},
		];
	}

	public getTagById(tagId: string) {
		return {
			id: 0,
			name: 'Tag 1',
			slug: '/tag1',
		};
	}

	public createTag(tagData: Model.Tag): Model.Tag {
		return {
			id: 3,
			name: 'Tag 4',
			slug: '/tag4',
		};
	}

	public updateTag(tagId: string, tagData: Model.Tag): number {
		return 200;
	}

	public deleteTag(tagId: string): number {
		return 200;
	}
}
