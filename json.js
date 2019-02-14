obj {
    "operationalLayers": [
        {
            "layerType": "ArcGISFeatureLayer",
            "featureCollectionType": "notes",
            "id": "mapNotes_5010",
            "title": "Map Notes",
            "featureCollection": {
                "layers": [
                    {
                        "layerDefinition": {
                            "objectIdField": "OBJECTID",
                            "templates": [],
                            "type": "Feature Layer",
                            "drawingInfo": {
                                "renderer": {
                                    "field1": "TYPEID",
                                    "type": "uniqueValue",
                                    "uniqueValueInfos": [
                                        {
                                            "symbol": {
                                                "style": "esriSFSSolid",
                                                "color": [
                                                    155,
                                                    187,
                                                    89,
                                                    128
                                                ],
                                                "outline": {
                                                    "style": "esriSLSSolid",
                                                    "color": [
                                                        115,
                                                        140,
                                                        61,
                                                        255
                                                    ],
                                                    "width": 1.5,
                                                    "type": "esriSLS"
                                                },
                                                "type": "esriSFS"
                                            },
                                            "description": "",
                                            "value": "0",
                                            "label": "Area"
                                        }
                                    ]
                                }
                            },
                            "displayField": "TITLE",
                            "visibilityField": "VISIBLE",
                            "name": "Areas",
                            "hasAttachments": false,
                            "typeIdField": "TYPEID",
                            "capabilities": "Query,Editing",
                            "types": [
                                {
                                    "id": 0,
                                    "templates": [
                                        {
                                            "drawingTool": "esriFeatureEditToolPolygon",
                                            "description": "",
                                            "name": "Area",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolTriangle",
                                            "description": "",
                                            "name": "Triangle",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolRectangle",
                                            "description": "",
                                            "name": "Rectangle",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolLeftArrow",
                                            "description": "",
                                            "name": "Left Arrow",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolRightArrow",
                                            "description": "",
                                            "name": "Right Arrow",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolEllipse",
                                            "description": "",
                                            "name": "Ellipse",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolUpArrow",
                                            "description": "",
                                            "name": "Up Arrow",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolDownArrow",
                                            "description": "",
                                            "name": "Down Arrow",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolCircle",
                                            "description": "",
                                            "name": "Circle",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolFreehand",
                                            "description": "",
                                            "name": "Freehand Area",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Area",
                                                    "TYPEID": 0
                                                }
                                            }
                                        }
                                    ],
                                    "domains": {},
                                    "name": "Area"
                                }
                            ],
                            "geometryType": "esriGeometryPolygon",
                            "fields": [
                                {
                                    "alias": "OBJECTID",
                                    "name": "OBJECTID",
                                    "type": "esriFieldTypeOID",
                                    "editable": false
                                },
                                {
                                    "alias": "Title",
                                    "name": "TITLE",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Visible",
                                    "name": "VISIBLE",
                                    "type": "esriFieldTypeInteger",
                                    "editable": true
                                },
                                {
                                    "alias": "Description",
                                    "name": "DESCRIPTION",
                                    "length": 1073741822,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Image URL",
                                    "name": "IMAGE_URL",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Image Link URL",
                                    "name": "IMAGE_LINK_URL",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "DATE",
                                    "name": "DATE",
                                    "length": 36,
                                    "type": "esriFieldTypeDate",
                                    "editable": true
                                },
                                {
                                    "alias": "Type ID",
                                    "name": "TYPEID",
                                    "type": "esriFieldTypeInteger",
                                    "editable": true
                                }
                            ],
                            "extent": null,
                            "spatialReference": {
                                "wkid": 102100,
                                "latestWkid": 3857
                            }
                        },
                        "popupInfo": {
                            "mediaInfos": [
                                {
                                    "value": {
                                        "sourceURL": "{IMAGE_URL}",
                                        "linkURL": "{IMAGE_LINK_URL}"
                                    },
                                    "type": "image"
                                }
                            ],
                            "title": "{TITLE}",
                            "description": "{DESCRIPTION}"
                        },
                        "featureSet": {
                            "geometryType": "esriGeometryPolygon",
                            "features": []
                        },
                        "nextObjectId": 0
                    },
                    {
                        "layerDefinition": {
                            "objectIdField": "OBJECTID",
                            "templates": [],
                            "type": "Feature Layer",
                            "drawingInfo": {
                                "renderer": {
                                    "field1": "TYPEID",
                                    "type": "uniqueValue",
                                    "uniqueValueInfos": [
                                        {
                                            "symbol": {
                                                "style": "esriSLSSolid",
                                                "color": [
                                                    115,
                                                    140,
                                                    61,
                                                    255
                                                ],
                                                "width": 1.5,
                                                "type": "esriSLS"
                                            },
                                            "description": "",
                                            "value": "0",
                                            "label": "Line"
                                        }
                                    ]
                                }
                            },
                            "displayField": "TITLE",
                            "visibilityField": "VISIBLE",
                            "name": "Lines",
                            "hasAttachments": false,
                            "typeIdField": "TYPEID",
                            "capabilities": "Query,Editing",
                            "types": [
                                {
                                    "id": 0,
                                    "templates": [
                                        {
                                            "drawingTool": "esriFeatureEditToolLine",
                                            "description": "",
                                            "name": "Line",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Line",
                                                    "TYPEID": 0
                                                }
                                            }
                                        },
                                        {
                                            "drawingTool": "esriFeatureEditToolFreehand",
                                            "description": "",
                                            "name": "Freehand Line",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Line",
                                                    "TYPEID": 0
                                                }
                                            }
                                        }
                                    ],
                                    "domains": {},
                                    "name": "Line"
                                }
                            ],
                            "geometryType": "esriGeometryPolyline",
                            "fields": [
                                {
                                    "alias": "OBJECTID",
                                    "name": "OBJECTID",
                                    "type": "esriFieldTypeOID",
                                    "editable": false
                                },
                                {
                                    "alias": "Title",
                                    "name": "TITLE",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Visible",
                                    "name": "VISIBLE",
                                    "type": "esriFieldTypeInteger",
                                    "editable": true
                                },
                                {
                                    "alias": "Description",
                                    "name": "DESCRIPTION",
                                    "length": 1073741822,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Image URL",
                                    "name": "IMAGE_URL",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Image Link URL",
                                    "name": "IMAGE_LINK_URL",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "DATE",
                                    "name": "DATE",
                                    "length": 36,
                                    "type": "esriFieldTypeDate",
                                    "editable": true
                                },
                                {
                                    "alias": "Type ID",
                                    "name": "TYPEID",
                                    "type": "esriFieldTypeInteger",
                                    "editable": true
                                }
                            ],
                            "extent": null,
                            "spatialReference": {
                                "wkid": 102100,
                                "latestWkid": 3857
                            }
                        },
                        "popupInfo": {
                            "mediaInfos": [
                                {
                                    "value": {
                                        "sourceURL": "{IMAGE_URL}",
                                        "linkURL": "{IMAGE_LINK_URL}"
                                    },
                                    "type": "image"
                                }
                            ],
                            "title": "{TITLE}",
                            "description": "{DESCRIPTION}"
                        },
                        "featureSet": {
                            "geometryType": "esriGeometryPolyline",
                            "features": []
                        },
                        "nextObjectId": 0
                    },
                    {
                        "layerDefinition": {
                            "objectIdField": "OBJECTID",
                            "templates": [],
                            "type": "Feature Layer",
                            "drawingInfo": {
                                "renderer": {
                                    "field1": "TYPEID",
                                    "type": "uniqueValue",
                                    "uniqueValueInfos": [
                                        {
                                            "symbol": {
                                                "horizontalAlignment": "left",
                                                "verticalAlignment": "baseline",
                                                "color": [
                                                    0,
                                                    0,
                                                    0,
                                                    255
                                                ],
                                                "font": {
                                                    "weight": "bold",
                                                    "style": "normal",
                                                    "family": "Arial Unicode MS",
                                                    "size": 12
                                                },
                                                "type": "esriTS"
                                            },
                                            "description": "",
                                            "value": "0",
                                            "label": "Text"
                                        }
                                    ]
                                }
                            },
                            "displayField": "TITLE",
                            "visibilityField": "VISIBLE",
                            "name": "Text",
                            "hasAttachments": false,
                            "typeIdField": "TYPEID",
                            "capabilities": "Query,Editing",
                            "types": [
                                {
                                    "id": 0,
                                    "templates": [
                                        {
                                            "drawingTool": "esriFeatureEditToolText",
                                            "description": "",
                                            "name": "Text",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TYPEID": 0
                                                }
                                            }
                                        }
                                    ],
                                    "domains": {},
                                    "name": "Text"
                                }
                            ],
                            "geometryType": "esriGeometryPoint",
                            "fields": [
                                {
                                    "alias": "OBJECTID",
                                    "name": "OBJECTID",
                                    "type": "esriFieldTypeOID",
                                    "editable": false
                                },
                                {
                                    "alias": "Title",
                                    "name": "TITLE",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Visible",
                                    "name": "VISIBLE",
                                    "type": "esriFieldTypeInteger",
                                    "editable": true
                                },
                                {
                                    "alias": "Description",
                                    "name": "DESCRIPTION",
                                    "length": 1073741822,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Image URL",
                                    "name": "IMAGE_URL",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Image Link URL",
                                    "name": "IMAGE_LINK_URL",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "DATE",
                                    "name": "DATE",
                                    "length": 36,
                                    "type": "esriFieldTypeDate",
                                    "editable": true
                                },
                                {
                                    "alias": "Type ID",
                                    "name": "TYPEID",
                                    "type": "esriFieldTypeInteger",
                                    "editable": true
                                },
                                {
                                    "alias": "Text",
                                    "name": "TEXT",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                }
                            ],
                            "extent": null,
                            "spatialReference": {
                                "wkid": 102100,
                                "latestWkid": 3857
                            }
                        },
                        "featureSet": {
                            "geometryType": "esriGeometryPoint",
                            "features": []
                        },
                        "nextObjectId": 0
                    },
                    {
                        "layerDefinition": {
                            "objectIdField": "OBJECTID",
                            "templates": [],
                            "type": "Feature Layer",
                            "drawingInfo": {
                                "renderer": {
                                    "field1": "TYPEID",
                                    "type": "uniqueValue",
                                    "uniqueValueInfos": [
                                        {
                                            "symbol": {
                                                "height": 24,
                                                "xoffset": 0,
                                                "yoffset": 12,
                                                "width": 24,
                                                "contentType": "image/png",
                                                "type": "esriPMS",
                                                "url": "https://static.arcgis.com/images/Symbols/Basic/GreenStickpin.png"
                                            },
                                            "description": "",
                                            "value": "0",
                                            "label": "Stickpin"
                                        },
                                        {
                                            "symbol": {
                                                "height": 24,
                                                "xoffset": 2,
                                                "yoffset": 8,
                                                "width": 24,
                                                "contentType": "image/png",
                                                "type": "esriPMS",
                                                "url": "https://static.arcgis.com/images/Symbols/Basic/GreenShinyPin.png"
                                            },
                                            "value": "1",
                                            "label": "Pushpin"
                                        },
                                        {
                                            "symbol": {
                                                "style": "esriSMSCross",
                                                "color": [
                                                    155,
                                                    187,
                                                    89,
                                                    128
                                                ],
                                                "outline": {
                                                    "style": "esriSLSSolid",
                                                    "color": [
                                                        115,
                                                        140,
                                                        61,
                                                        255
                                                    ],
                                                    "width": 1,
                                                    "type": "esriSLS"
                                                },
                                                "type": "esriSMS",
                                                "size": 18
                                            },
                                            "value": "2",
                                            "label": "Cross"
                                        }
                                    ]
                                }
                            },
                            "displayField": "TITLE",
                            "visibilityField": "VISIBLE",
                            "name": "Points",
                            "hasAttachments": false,
                            "typeIdField": "TYPEID",
                            "capabilities": "Query,Editing",
                            "types": [
                                {
                                    "id": 0,
                                    "templates": [
                                        {
                                            "drawingTool": "esriFeatureEditToolPoint",
                                            "description": "",
                                            "name": "Stickpin",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Point",
                                                    "TYPEID": 0
                                                }
                                            }
                                        }
                                    ],
                                    "domains": {},
                                    "name": "Stickpin"
                                },
                                {
                                    "id": 1,
                                    "templates": [
                                        {
                                            "drawingTool": "esriFeatureEditToolPoint",
                                            "description": "",
                                            "name": "Pushpin",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Point",
                                                    "TYPEID": 1
                                                }
                                            }
                                        }
                                    ],
                                    "domains": {},
                                    "name": "Pushpin"
                                },
                                {
                                    "id": 2,
                                    "templates": [
                                        {
                                            "drawingTool": "esriFeatureEditToolPoint",
                                            "description": "",
                                            "name": "Cross",
                                            "prototype": {
                                                "attributes": {
                                                    "VISIBLE": 1,
                                                    "TITLE": "Point",
                                                    "TYPEID": 2
                                                }
                                            }
                                        }
                                    ],
                                    "domains": {},
                                    "name": "Cross"
                                }
                            ],
                            "geometryType": "esriGeometryPoint",
                            "fields": [
                                {
                                    "alias": "OBJECTID",
                                    "name": "OBJECTID",
                                    "type": "esriFieldTypeOID",
                                    "editable": false
                                },
                                {
                                    "alias": "Title",
                                    "name": "TITLE",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Visible",
                                    "name": "VISIBLE",
                                    "type": "esriFieldTypeInteger",
                                    "editable": true
                                },
                                {
                                    "alias": "Description",
                                    "name": "DESCRIPTION",
                                    "length": 1073741822,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Image URL",
                                    "name": "IMAGE_URL",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "Image Link URL",
                                    "name": "IMAGE_LINK_URL",
                                    "length": 255,
                                    "type": "esriFieldTypeString",
                                    "editable": true
                                },
                                {
                                    "alias": "DATE",
                                    "name": "DATE",
                                    "length": 36,
                                    "type": "esriFieldTypeDate",
                                    "editable": true
                                },
                                {
                                    "alias": "Type ID",
                                    "name": "TYPEID",
                                    "type": "esriFieldTypeInteger",
                                    "editable": true
                                }
                            ],
                            "extent": {
                                "xmin": -413319.93670405657,
                                "ymin": 4934599.186913124,
                                "xmax": -413319.93650405656,
                                "ymax": 4934599.187113124,
                                "spatialReference": {
                                    "wkid": 102100,
                                    "latestWkid": 3857
                                }
                            },
                            "spatialReference": {
                                "wkid": 102100,
                                "latestWkid": 3857
                            }
                        },
                        "popupInfo": {
                            "mediaInfos": [
                                {
                                    "value": {
                                        "sourceURL": "{IMAGE_URL}",
                                        "linkURL": "{IMAGE_LINK_URL}"
                                    },
                                    "type": "image"
                                }
                            ],
                            "title": "{TITLE}",
                            "description": "{DESCRIPTION}"
                        },
                        "featureSet": {
                            "geometryType": "esriGeometryPoint",
                            "features": [
                                {
                                    "geometry": {
                                        "x": -413319.94,
                                        "y": 4934599.19,
                                        "spatialReference": {
                                            "wkid": 102100,
                                            "latestWkid": 3857
                                        }
                                    },
                                    "attributes": {
                                        "VISIBLE": 1,
                                        "TITLE": "Point",
                                        "TYPEID": 1,
                                        "OBJECTID": 0
                                    }
                                }
                            ]
                        },
                        "nextObjectId": 1
                    }
                ],
                "showLegend": false
            },
            "opacity": 1,
            "visibility": true
        }
    ],
    "baseMap": {
        "baseMapLayers": [
            {
                "id": "defaultBasemap",
                "layerType": "ArcGISTiledMapServiceLayer",
                "url": "https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer",
                "visibility": true,
                "opacity": 1,
                "title": "Topographic"
            }
        ],
        "title": "Topographic"
    },
    "spatialReference": {
        "wkid": 102100,
        "latestWkid": 3857
    },
    "authoringApp": "WebMapViewer",
    "authoringAppVersion": "6.4",
    "version": "2.13"
}
