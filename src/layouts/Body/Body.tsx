import "./styles.scss";
import Calendar from "../../components/Calendar";
import Tasks from "../../components/Tasks";
import Button from "../../components/Button";
import Modal from "../../components/Modals/Modal";
import { useEffect, useState } from "react";
import { AddEvent } from "../../components/Modals/ModalChildren";
import SimpleBarReact from "simplebar-react";
import SimpleBar from "simplebar";
import "simplebar/src/simplebar.css";

const Body = () => {
    useEffect(() => {
        const scrollable = document.querySelectorAll(".fc-daygrid-day-events");
        // Array.from(scrollable).forEach((node: Node) => {
        //     console.log(node as HTMLElement);
        //     new SimpleBar(node as HTMLElement, { autoHide: true });
        // });
    }, []);

    const [openModal, setOpenModal] = useState(false);
    const [eventList, setEventList] = useState([
        { title: "event 1", date: "2022-05-01" },
        { title: "event 1", date: "2022-05-01" },
        { title: "event 1", date: "2022-05-01" },
        { title: "event 1", date: "2022-05-01" },
        { title: "event 1", date: "2022-05-01" },
        { title: "event 2", date: "2022-05-02" },
    ]);
    return (
        <SimpleBarReact style={{ height: "calc(100vh - 88px)" }}>
            <div className="Body">
                {/* <div className="carousel"></div> */}
                <div className="Body__header">
                    <h2>
                        One-stop calendar to keep track of all your tasks and
                        events
                    </h2>
                    <Button
                        theme="dark"
                        onClick={() => {
                            setOpenModal(true);
                        }}
                    >
                        Add event
                    </Button>
                </div>
                <div className="CalendarTasks">
                    <Calendar
                        eventList={eventList}
                        setEventList={setEventList}
                    />
                    {/* <Tasks /> */}
                </div>

                <Modal openModal={openModal} setOpenModal={setOpenModal}>
                    <AddEvent
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        eventList={eventList}
                        setEventList={setEventList}
                    />
                </Modal>
            </div>
        </SimpleBarReact>
    );
};

export default Body;
