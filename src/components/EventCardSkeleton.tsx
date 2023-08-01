import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const EventCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height={200} />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default EventCardSkeleton