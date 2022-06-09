import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./styles.scss";
import { AddEvent, EventInfo } from "../Modals/ModalChildren";
import Modal from "../Modals/Modal";

interface CalendarProps {
    eventList: {
        id: string;
        title: string;
        start: string;
        end: string;
        description: string;
    }[];
    setEventList: (
        list: {
            id: string;
            title: string;
            start: string;
            end: string;
            description: string;
        }[]
    ) => void;
}

const Calendar = ({ eventList, setEventList }: CalendarProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [modalChild, setModalChild] = useState(<></>);

    return (
        <div className="Calendar">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                height="auto"
                initialView="dayGridMonth"
                editable={true}
                events={eventList}
                dateClick={(info) => {
                    setModalChild(
                        <AddEvent
                            dateStr={info.dateStr}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            eventList={eventList}
                            setEventList={setEventList}
                        />
                    );
                    setOpenModal(true);
                }}
                eventClick={(info) => {
                    const eventInd = info.event._def.publicId;
                    console.log(info);
                    console.log(info.event.title);
                    setModalChild(
                        <EventInfo
                            info={info}
                            eventInd={parseInt(eventInd)}
                            eventList={eventList}
                            setEventList={setEventList}
                        />
                    );
                    setOpenModal(true);
                }}
            />
            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                {modalChild}
            </Modal>
        </div>
    );
};

export default Calendar;
