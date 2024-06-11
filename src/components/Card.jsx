import React from 'react';
import './css/style.css';
export default function Card({ data }) {
    return (
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card bg-light icon-zoom">
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col-8">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-uppercase font-weight-bold">{data.title}</p>
                                <h5 className="font-weight-bolder">
                                    {data.body.toLocaleString()}
                                </h5>
                                <p className="mb-0">
                                   
                                    {data.date}
                                </p>
                            </div>
                        </div>
                        <div className="col-4 text-end">
                        <div className={`icon icon-shape ${data.bgColor} shadow-primary text-center rounded-circle`}>
                             <i className={`${data.icon} icon-rotate`} aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
