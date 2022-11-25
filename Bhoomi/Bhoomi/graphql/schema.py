import strawberry
from strawberry.extensions import QueryDepthLimiter, ValidationCache, ParserCache, AddValidationRules
from strawberry.tools import merge_types

from blogs.graphql.mutations.manageBooks import ManagePost
from blogs.graphql.queries.book import BlogQueries

Mutations = merge_types('Mutations', (ManageStudents,))
Query = merge_types('Queries', (UserQuery,))

extensions = [
    # JWTExtension,
    QueryDepthLimiter(max_depth=10),
    ParserCache(maxsize=100),
    ValidationCache(maxsize=100),
]

schema = strawberry.Schema(
    query=Query,
    mutation=Mutations,
    extensions=extensions
)

__all__ = [
    'schema',
    'Query',
    'Mutations',
]