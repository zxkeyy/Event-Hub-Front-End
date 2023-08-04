import { useParams } from "react-router-dom";
import useEvent from "../hookers/useEvent";

const EventDetailPage = () => {
  const { slug } = useParams();
  const { data: event, isLoading, error } = useEvent(slug!);

  if (error) throw error;
  if (!event) return;
  return <div>{event?.name + event?.description}</div>;
};

export default EventDetailPage;
