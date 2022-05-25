import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./styles.scss";

const Calendar = () => {
    return (
        <div className="Calendar">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: "event 1", date: "2022-05-01" },
                    { title: "event 1", date: "2022-05-01" },
                    { title: "event 1", date: "2022-05-01" },
                    { title: "event 1", date: "2022-05-01" },
                    { title: "event 1", date: "2022-05-01" },
                    { title: "event 2", date: "2022-05-02" },
                ]}
            />
        </div>
    );
};

export default Calendar;
