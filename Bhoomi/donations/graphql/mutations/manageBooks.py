import strawberry
from graphql import GraphQLError
from donations.graphql.input.book import DonationInput
from donations.models import donation_requst

@strawberry.type
class Donations:
    @strawberry.mutation
    def createDonation(self, info, input: DonationInput) -> donation_requst:
        if info.context.user.is_anonymous:
            raise GraphQLError("You must be logged in to create a donation")
        donation = donation_requst(title=input.donation_description, description=input.donation_amount)
        donation.save()
        return donation