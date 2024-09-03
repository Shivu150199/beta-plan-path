import React, { useContext, useState } from "react";
import { ShareModal, TableView, TreeView } from "../../components/path";
import { BreadCrumb } from "../../components/utils";
import { PathContext } from "../../context api/PathContext";
import { pathlogo, pdf, share, table } from "../../assets/path";

const Path = () => {
    const { myPathBreadCrumb } = useContext(PathContext);
    const [tableView, setTableView] = useState(false);

    const handleViewToggle = () => {
        setTableView((prevView) => !prevView);
    };

    const handleShareClick = () => {
        // Logic for handling the share button click
    };

    const handleDownloadClick = () => {
        // Logic for handling the download button click
    };

    return (
        <section className="bg-creambg w-[100%]">
            <BreadCrumb list={myPathBreadCrumb} />
            <section className="bg-white md:mx-4 rounded-md border-[1px] md:h-[calc(100vh-116px)] h-[calc(100vh-66px)] overflow-auto relative no-scrollbar">
                <div className="flex items-center justify-between p-4 border-b-[1px] sticky top-0 bg-white z-10">
                    <h2 className="text-2xl font-bold text-dark_violet">
                        Generate plan
                    </h2>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleViewToggle}
                            className="outline-btn border-[1px] border-primary md:flex items-center gap-1 hidden"
                        >
                            <img src={table} alt="Toggle View" />
                            {tableView ? (
                                <span>Data table view</span>
                            ) : (
                                <span>Data tree view</span>
                            )}
                        </button>
                        <button
                            onClick={handleShareClick}
                            className="outline-btn border-[1px] border-primary md:flex items-center gap-2 hidden"
                        >
                            <img src={share} alt="Share" />
                            <span>Share</span>
                        </button>
                        <button
                            onClick={handleDownloadClick}
                            className="outline-btn border-[1px] border-primary flex items-center gap-1"
                        >
                            <img src={pdf} alt="Download" />
                            <span>Download</span>
                        </button>
                        <button className="primary-btn border-[1px] border-primary md:flex hidden">
                            Edit
                        </button>
                    </div>
                </div>

                <div className="flex items-start justify-center md:justify-between p-4">
                    <img src={pathlogo} alt="Path Logo" className="hidden md:block"/>
                    <h2 className="text-[36px] font-bold text-center flex flex-col items-center justify-center">
                        <span className="text-dark_violet">
                            Course progression
                        </span>
                        <span className="text-[#F54746]">
                            recommendation
                        </span>
                    </h2>
                    <p className="hidden md:block">Created on: 20/06/2024</p>
                </div>

                {tableView ? <TableView /> : <TreeView />}
            </section>
        </section>
    );
};

export default Path;
