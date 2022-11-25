from typing import Optional

import strawberry

@strawberry.input()

class DonationInput:
        donation_description: str
        donation_amount: int