import React from "react";

import {conferencePaper, arxivPaper} from "./Data.js";

class Conference extends React.Component {
    render() {
        return (
            <div>
                {
                    conferencePaper.map((paper) => {
                        return (
                            <div>
                                <div className="paper"><a href={paper.paperLink}>{paper.title}</a></div>
                                <div className="authors">{paper.authors}</div>
                                <div className="conference">{paper.conference}</div>
                                <div className="paper">
                                    <p>
                                        {
                                            paper.links.map((oneItem) => {
                                                return (
                                                    <a href={oneItem.oneLink}>{oneItem.oneContent}&nbsp;</a> 
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                                <div className="abstract">{paper.abstract}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
};

class Arxiv extends React.Component {
    render() {
        return (
            <div>
                {
                    arxivPaper.map((paper) => {
                        return (
                            <div>
                                <div className="paper"><a href={paper.paperLink}>{paper.title}</a></div>
                                <div className="authors">{paper.authors}</div>
                                <div className="paper">
                                    <p>
                                        {
                                            paper.links.map((oneItem) => {
                                                return (
                                                    <a href={oneItem.oneLink}>{oneItem.oneContent}&nbsp;</a>
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                                <div className="abstract">{paper.abstract}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
};

export {
    Conference, Arxiv
}
