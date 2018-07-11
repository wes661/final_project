import React from "react";

export const ScrollBox = props => {
    console.log(props);

    const pastScripts = props.meds.map(med => {
        return (
            <scroll-page className="scrollPg" id="page-2">
                <ul>
                    <li>{med.name}</li>
                    <li>{med.day}</li>
                </ul>
            </scroll-page>
        )
        console.log(pastScripts)
    })
    return (
        <div
            data-spy="scroll"
            data-target="#task-table"
            data-offset="0"
            className="scrollspy-example"
        >
            <div className="col past">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Past Scripts</h3>
                    </div>

                    <scroll-container>
                        {pastScripts}
                    </scroll-container>
                </div>
            </div>
        </div>
    )

}