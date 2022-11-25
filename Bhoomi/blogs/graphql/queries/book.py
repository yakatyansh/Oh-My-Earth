from typing import List, Optional

import strawberry

from book.graphql.types.book import BookType
from book.models import Book

@strawberry.type()
class BookQuery:
    @strawberry.field()
    def books(self, info) -> List[BookType]:
        return Book.objects.all()