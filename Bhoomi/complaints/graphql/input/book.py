from typing import Optional

import strawberry

@strawberry.input()

class BookInput:
    book_name: str
    author: str
    cost: int
    summary: str