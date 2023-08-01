import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const EventCardSkeleton = () => {
  return (
    <Card width={300}>
        <Skeleton height={200} />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default EventCardSkeleton