import React, { FC, Fragment } from "react";
import EventCard from "./EventCard";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";





const CardBlock: FC = () => {
    const allTheEvents = useSelector((state: RootState) => state.event.events);
    return (
        <Fragment>
            {
                allTheEvents.map(cardEvent =>
                (
                    <div key={cardEvent.id} className="col-md-6 col-lg-4 col-sm-12 my-3">
                        <EventCard event={cardEvent} />
                    </div>
                ))
            }
        </Fragment>
    )
}


export default CardBlock;