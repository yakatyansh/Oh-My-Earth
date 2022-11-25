from typing import List

import strawberry

@strawberry.type
class BookType:
    id: strawberry.ID
    book_name: str
    author: str
    cost: int
    summary: str