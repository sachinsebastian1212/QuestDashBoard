var data1 = [{
    "type": "questset",
    "id": "qs_1",
    "children": [{
        "type": "quest",
        "id": "q_1",
        "children": [{
            "type": "objectivelist",
            "id": "ol_1",
            "children": [{
                "type": "objective",
                "id": "o_1"
            }]
        }]
    }]
}];

var data2 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
var gdata2 = [{"data":{"type":"questset","id":"qs_1","undefined":"auto","rewardId":"r_3","difficulty":"6"},"children":[{"data":{"type":"quest","id":"q_1","undefined":"auto","title":"title1","description":"desc 1","reward":"r_3","questActionType":"Type2","questAction":"action2"},"children":[{"data":{"type":"objectivelist","id":"ol_1","undefined":"auto"},"children":[{"data":{"type":"objective","id":"o_1","db_id":"val3"}}]}]}]}];
/**
 * two objectives
 */
var data3 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            },
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

/**
 * two objective list
 */
var data4 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            },
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_3"
                                }
                            },
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_4"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
var gdata4 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1",
            "undefined": "auto",
            "rewardId": "r_1",
            "difficulty": "1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1",
                    "undefined": "auto",
                    "title": "",
                    "description": "",
                    "reward": "r_1",
                    "questActionType": "Type1",
                    "questAction": "action1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1",
                            "undefined": "auto"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1",
                                    "db_id": "val1"
                                }
                            },
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2",
                                    "db_id": "val1"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2",
                            "undefined": "auto"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_3",
                                    "db_id": "val1"
                                }
                            },
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_4",
                                    "db_id": "val1"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
//Two quest set
var data5 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

/**
 * two quests
 */
var data6 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


var data7 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }

];
