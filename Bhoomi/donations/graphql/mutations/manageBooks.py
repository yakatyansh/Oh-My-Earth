import strawberry
from graphql import GraphQLError

@strawberry.type
class ManageBooks:
    @strawberry.mutation
    def createBook(self, info, title: str, author: str, price: int, quantity: int) -> str:
        return "Book created successfully"
    @strawberry.mutation
    def updateBook(self, info, id: int, title: str, author: str, price: int, quantity: int) -> str:
        return "Book updated successfully"
    @strawberry.mutation
    def deleteBook(self, info, id: int) -> str:
        return "Book deleted successfully"