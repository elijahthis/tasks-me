import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./styles.scss";
import { AddEvent } from "../Modals/ModalChildren";
import Modal from "../Modals/Modal";
import { JsxEmit } from "typescript";

interface CalendarProps {
    // eventList: { title: string; date: string }[]};
    eventList: { title: string; date: string }[];
    setEventList: ([]) => void;
}

const Calendar = ({ eventList, setEventList }: CalendarProps) => {
    const [openModal, setOpenModal] = useState(false);
    const [modalChild, setModalChild] = useState(<></>);

    return (
        <div className="Calendar">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
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
            />
            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                {modalChild}
            </Modal>
        </div>
    );
};

export default Calendar;
