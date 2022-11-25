import strawberry
from graphql import GraphQLError
from strawberry.file_uploads import Upload
from strawberry.types import Info
from blogs.graphql.input.book import PostInput, CategoryInput
from blogs.models import Post, Category


@strawberry.type
class ManagePost:
    @strawberry.mutation
    def createPost(self, info, input: PostInput) -> Post:
        # if info.context.user.is_anonymous:
        #     raise GraphQLError("You must be logged in to create a post")
        post = Post(title=input.title, description=input.description)
        post.save()
        return post
    @strawberry.mutation
    def updatePost(self, info, input: PostInput) -> Post:
        # if info.context.user.is_anonymous:
        #     raise GraphQLError("You must be logged in to update a post")
        post = Post.objects.get(id=input.id)
        post.title = input.title
        post.description = input.description
        post.save()
        return post

    def deletePost(self, info, id: int) -> bool:
        # if info.context.user.is_anonymous:
        #     raise GraphQLError("You must be logged in to delete a post")
        post = Post.objects.get(id=id)
        post.delete()
        return True