import { Post } from "src/app/models/Post";
import { PostsComponent } from "./posts.component";

describe('Posts Component', () => {
    let POSTS : Post[];
    let component :PostsComponent ; 
    let mockPostService: any  ; 
    beforeEach(() => {
        POSTS = [{
            id: 1, body: 'body1', title: 'title1',},
          { id: 2, body: 'body2', title: 'title2', }, 
          { id: 1, body: 'body1', title: 'title1', },]; 
          mockPostService= jasmine.createSpyObj(['getPosts','deletePost'])
          component = new PostsComponent(mockPostService) ;
    })

describe('delete', () => {
    it('should delete the selected post from the posts ', () => {
        
    })
})
})