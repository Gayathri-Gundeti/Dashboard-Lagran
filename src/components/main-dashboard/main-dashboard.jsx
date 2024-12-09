import React from "react";
import "./main-dashboard.css";
export function MainDashboard(){
    return(
        <div className="maindashboard-container">
            <div className="dashboard-title">Dashboard</div>
            <div className="cards-part">
                <div className="Card">
                    <div className="fs-5 fw-bold text-dark">1478 286</div>
                    <div>Total visits</div>
                    <div><span className="text-success me-2">4.07%</span>
                    Last month</div>
                </div>
                <div className="Card">
                    <div className="fs-5 fw-bold text-dark">1478 286</div>
                    <div>Total visits</div>
                    <div><span className="text-success me-2">0.24%</span>
                    Last month</div>
                </div>
                <div className="Card">
                    <div className="fs-5 fw-bold text-dark">1478 286</div>
                    <div>Total visits</div>
                    <div><span className="text-danger me-2">1.64%</span>
                    Last month</div>
                </div>
                <div className="Card">
                    <div className="fs-5 fw-bold text-dark">1478 286</div>
                    <div>Total visits</div>
                    <div><span className="text-warning me-2">0.00%</span>
                    Last month</div>
                </div>
            </div>
        </div>
    )
}