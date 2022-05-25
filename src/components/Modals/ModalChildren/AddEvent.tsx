import "./styles.scss";
import { Dispatch, SetStateAction } from "react";
import Button from "../../Button";

const AddEvent = ({
    openModal,
    setOpenModal,
}: {
    openModal: boolean;
    setOpenModal: (argg: boolean) => void;
}) => {
    return (
        <div
            className="ModalChild"
            onClick={(ev) => {
                ev.stopPropagation();
            }}
        >
            <h3>Add Event</h3>
            <form action="">
                <label htmlFor="">
                    Event title
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Event description
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    Start Date
                    <input type="text" name="" id="" />
                </label>
                <label htmlFor="">
                    End Date
                    <input type="text" name="" id="" />
                </label>
                <div className="actions">
                    <Button theme="dark" variant="full">
                        Create
                    </Button>
                    <Button theme="light" variant="full">
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;
