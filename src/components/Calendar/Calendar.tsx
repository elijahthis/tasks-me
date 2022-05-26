import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./styles.scss";
import { AddEvent } from "../Modals/ModalChildren";
import Modal from "../Modals/Modal";

const Calendar = ({
    eventList,
    setEventList,
}: {
    eventList: { title: string; date: string }[];
    setEventList: ([]) => void;
}) => {
    const [openModal, setOpenModal] = useState(false);
    const [modalChild, setModalChild] = useState(<></>);

    return (
        <div className="Calendar">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={eventList}
                dateClick={(info) => {
                    console.log(info.dateStr);
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
            />
            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                {modalChild}
            </Modal>
        </div>
    );
};

export default Calendar;
