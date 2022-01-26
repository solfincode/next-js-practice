import { useModule } from "../../contexts/module";
//event list component
import EventList from "../../components/EventList";
import EventSearch from "../../components/EventSearch";

export default function index() {
  const { dataState, searchHandle } = useModule();

  return (
    <div style={{ margin: "0 auto", width: "600px" }}>
      <EventSearch searchHandle={searchHandle} />
      {dataState.map((event) => (
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
