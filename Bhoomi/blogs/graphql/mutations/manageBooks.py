import strawberry
from graphql import GraphQLError

@strawberry.type
class ManagePost:
    @strawberry.mutation
    def createPost(self, info, title: str, author: str, price: int, quantity: int) -> str:
        return "Post created successfully"
    @strawberry.mutation
    def updatePost(self, info, id: int, title: str, author: str, price: int, quantity: int) -> str:
        return "Post updated successfully"
    @strawberry.mutation
    def deletePost(self, info, id: int) -> str:
        return "Post deleted successfully"