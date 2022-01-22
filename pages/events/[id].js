import { useRouter } from "next/router";
import { useModule } from "../../contexts/module";
import EventDeatails from "../../components/EventDetails";

export default function EventDetailsPage() {
  const { data } = useModule();
  const router = useRouter();
  const sortedDetails = data.filter((event) => event.id == router.query.id);

  return (
    <div style={{ margin: "0 auto", width: "600px" }}>
      <h2>events details page</h2>
      {sortedDetails.map((event) => (
        <EventDeatails
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          description={event.description}
        />
      ))}
    </div>
  );
}
