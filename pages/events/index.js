import { useModule } from "../../contexts/module";
//event list component
import EventList from "../../components/EventList";

export default function index() {
  const { data } = useModule();
  return (
    <div style={{ margin: "0 auto", width: "600px" }}>
      {data.map((event) => (
        <EventList
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
