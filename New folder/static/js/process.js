
$.ajax({
    method: 'GET',
    url: '/data/',
    success: function (data) {
        console.log(data);
        new Chart(document.getElementById("genderChart"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {
                        indexLabel: "{x}, {y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "horizontal",
                        label: "2017",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_chitieu_2017,
                    },
                    {
                        label: "2018",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_chitieu_2018,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Chỉ tiêu 2017-2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        var coloR = [];
        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgba(" + r + "," + g + "," + b + ",0.5)";
        };

        for (var i in data.nganh_2017) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("genderChart2"), {
            type: 'pie',
            data: {
                labels: data.nganh_2017,
                datasets: [{
                    data: data.chitieu_2017,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Chỉ tiêu các nghành 2017'
                }
            }
        });
        console.log("haha" + data);
        ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["2017"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nganh_2017,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.chitieu_2017
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap1',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        for (var i in data.nganh_2018) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("genderChart3"), {
            type: 'pie',
            data: {

                labels: data.nganh_2018,
                datasets: [{

                    data: data.chitieu_2018,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Chỉ tiêu các nghành 2018'
                }

            }
        });

        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["2018"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nganh_2018,
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {

                        "values": data.chitieu_2018
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap2',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("genderChart4"), {
            type: 'bar',
            data: {
                labels: data.sta,
                datasets: [
                    {
                        label: "2017",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_trungtuyen_2017,
                    },
                    {
                        label: "2018",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_trungtuyen_2018,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Trúng tuyển 2017-2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });

        for (var i in data.nganh_2017) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("genderChart5"), {
            type: 'pie',
            data: {
                labels: data.nganh_2017,
                datasets: [{
                    data: data.trungtuyen_2017,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển các nghành 2017'
                }
            }
        });

        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["2017"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nganh_2017,
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {

                        "values": data.trungtuyen_2017
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap3',
            data: myConfig,
            height: "100%",
            width: "100%"
        });

        for (var i in data.nganh_2018) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("genderChart6"), {
            type: 'pie',
            data: {
                labels: data.nganh_2018,
                datasets: [{
                    data: data.trungtuyen_2018,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển các nghành 2018'
                }
            }
        });

        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["2018"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nganh_2018,
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {

                        "values": data.trungtuyen_2018
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap4',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("genderChart7"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {

                        label: "2017",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_diem_2017,
                    },
                    {
                        label: "2018",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_diem_2018,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Điểm 2017-2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });

        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Điểm 2017"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nganh_2017,
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {

                        "values": data.diem_2017
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap5',
            data: myConfig,
            height: "100%",
            width: "100%"
        });

        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Điểm 2018"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nganh_2018,
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {

                        "values": data.diem_2018
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap6',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("genderChart9"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {

                        label: "2017-Đợt 1",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_trungtuyen_2017_d1,
                    },
                    {
                        label: "2017-Đợt 2",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_trungtuyen_2017_d2,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Trúng tuyển 2017 Đợt 1 - Đợt 2",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        new Chart(document.getElementById("genderChart10"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {

                        label: "2018-Đợt 1",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_trungtuyen_2018_d1,
                    },
                    {
                        label: "2018-Đợt 2",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_trungtuyen_2018_d2,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Trúng tuyển 2018 Đợt 1 - Đợt 2",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        new Chart(document.getElementById("genderChart11"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {

                        label: "2017-Đợt 1",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_trungtuyen_2017_d1,
                    },
                    {
                        label: "2018-Đợt 1",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_trungtuyen_2018_d1,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Trúng tuyển 2017-2018 Đợt 1",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        new Chart(document.getElementById("genderChart12"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {

                        label: "2017-Đợt 2",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_trungtuyen_2017_d2,
                    },
                    {
                        label: "2018-Đợt 2",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_trungtuyen_2018_d2,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Trúng tuyển 2017-2018 Đợt 2",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });

        for (var i in data.nghanh_tx_2017_d1) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("genderChart13"), {
            type: 'pie',
            data: {
                labels: data.nghanh_tx_2017_d1,
                datasets: [{
                    data: data.trungtuyen_tx_2017_d1,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển các nghành 2017-Đợt 1'
                }
            }
        });


        for (var i in data.nghanh_tx_2017_d2) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("genderChart14"), {
            type: 'pie',
            data: {
                labels: data.nghanh_tx_2017_d2,
                datasets: [{
                    data: data.trungtuyen_tx_2017_d2,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển các nghành 2017-Đợt 2'
                }
            }
        });

        for (var i in data.nghanh_tx_2018_d1) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("genderChart15"), {
            type: 'pie',
            data: {
                labels: data.nghanh_tx_2018_d1,
                datasets: [{
                    data: data.trungtuyen_tx_2018_d1,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển các nghành 2018-Đợt 1'
                }
            }
        });

        for (var i in data.nghanh_tx_2018_d2) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("genderChart16"), {
            type: 'pie',
            data: {
                labels: data.nghanh_tx_2018_d2,
                datasets: [{
                    data: data.trungtuyen_tx_2018_d2,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển các nghành 2018-Đợt 2'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["2017-D1"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_tx_2017_d1,
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {

                        "values": data.trungtuyen_tx_2017_d1
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap7',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["2017-D2"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_tx_2017_d2,
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {

                        "values": data.trungtuyen_tx_2017_d2
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap8',
            data: myConfig,
            height: "100%",
            width: "100%"
        });

        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["2018-D1"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_tx_2018_d1,
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {

                        "values": data.trungtuyen_tx_2018_d1
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap9',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["2018-D2"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_tx_2018_d2,
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {

                        "values": data.trungtuyen_tx_2018_d2
                    }
                ]
        };

        zingchart.render({
            id: 'heatmap10',
            data: myConfig,
            height: "100%",
            width: "100%"
        });

//         new Chart(document.getElementById("genderChart17"), {
//             type: 'bar',
//             data: {

//                 labels: data.sta,
//                 datasets: [
//                     {

//                         label: "2017-Đợt 1",
//                         backgroundColor: "rgba(62, 149, 205, 0.5)",
//                         borderColor: "rgba(62, 149, 205, 1)",
//                         pointBackgroundColor: "rgba(62, 149, 205, 1)",
//                         data: data.sta_diem_2017_d1,
//                     },
//                     {
//                         label: "2017-Đợt 2",
//                         backgroundColor: "rgba(255, 10, 77, 0.5)",
//                         borderColor: "rgba(255, 10, 77, 1)",
//                         pointBackgroundColor: "rgba(255, 10, 77, 1)",
//                         data: data.sta_diem_2017_d2,
//                     },
//                 ]
//             },
//             options: {
//                 legend: {
//                     labels: {
//                         fontSize: 18
//                     }
//                 },
//                 title: {
//                     display: true,
//                     text: "Điểm 2017 Đợt 1 - Đợt 2",
//                     fontSize: 22.0
//                 },
//                 scales: {
//                     yAxes: [{
//                         ticks: {
//                             beginAtZero: true,
//                             fontSize: 15.0,
//                         },
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Value',
//                             fontSize: 20.0,
//                         }
//                     }],
//                     xAxes: [{
//                         ticks: {
//                             fontSize: 15.0,
//                         },
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Statistics',
//                             fontSize: 20.0,
//                         }
//                     }]
//                 },
//                 responsive: false,
//             }
//         });
        
//     },
//     error: function (data) {
//         console.log('Error!');
//     }
// });

// $.ajax({
//     method: 'GET',
//     url: '/data/',
//     success: function (data) {
//         console.log(data.chitieu_2017)
        $('<table>').html(
            "<caption><h2>Chỉ tiêu 2017</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_chitieu_2017[0] + "</td>" +
            "<td>" + data.sta_chitieu_2017[1] + "</td>" +
            "<td>" + data.sta_chitieu_2017[2] + "</td> " +
            "<td>" + data.sta_chitieu_2017[3] + "</td> " +
            "<td>" + data.sta_chitieu_2017[4] + "</td> " +
            "<td>" + data.sta_chitieu_2017[5] + "</td> " +
            "<td>" + data.sta_chitieu_2017[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable');
        $('<table>').html(
            "<caption><h2>Chỉ tiêu 2018</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_chitieu_2018[0] + "</td>" +
            "<td>" + data.sta_chitieu_2018[1] + "</td>" +
            "<td>" + data.sta_chitieu_2018[2] + "</td> " +
            "<td>" + data.sta_chitieu_2018[3] + "</td> " +
            "<td>" + data.sta_chitieu_2018[4] + "</td> " +
            "<td>" + data.sta_chitieu_2018[5] + "</td> " +
            "<td>" + data.sta_chitieu_2018[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable1');
        $('<table>').html(
            "<caption><h2>Trúng tuyển 2017</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_trungtuyen_2017[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_2017[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_2017[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable2');
        $('<table>').html(
            "<caption><h2>Trúng tuyển 2018</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_trungtuyen_2018[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_2018[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_2018[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable3');
        $('<table>').html(
            "<caption><h2>Trúng tuyển 2017 đợt 1</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_trungtuyen_2017_d1[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_2017_d1[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_2017_d1[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017_d1[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017_d1[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017_d1[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017_d1[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable4');
        $('<table>').html(
            "<caption><h2>Điểm 2017 đợt 1</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_diem_2017_d1[0] + "</td>" +
            "<td>" + data.sta_diem_2017_d1[1] + "</td>" +
            "<td>" + data.sta_diem_2017_d1[2] + "</td> " +
            "<td>" + data.sta_diem_2017_d1[3] + "</td> " +
            "<td>" + data.sta_diem_2017_d1[4] + "</td> " +
            "<td>" + data.sta_diem_2017_d1[5] + "</td> " +
            "<td>" + data.sta_diem_2017_d1[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable5');
        $('<table>').html(
            "<caption><h2>Trúng tuyển 2017 đợt 2</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_trungtuyen_2017_d2[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_2017_d2[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_2017_d2[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017_d2[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017_d2[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017_d2[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_2017_d2[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable6');
        $('<table>').html(
            "<caption><h2>Điểm 2017 đợt 2</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_diem_2017_d2[0] + "</td>" +
            "<td>" + data.sta_diem_2017_d2[1] + "</td>" +
            "<td>" + data.sta_diem_2017_d2[2] + "</td> " +
            "<td>" + data.sta_diem_2017_d2[3] + "</td> " +
            "<td>" + data.sta_diem_2017_d2[4] + "</td> " +
            "<td>" + data.sta_diem_2017_d2[5] + "</td> " +
            "<td>" + data.sta_diem_2017_d2[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable7');
        $('<table>').html(
            "<caption><h2>Trúng tuyển 2018 đợt 1</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_trungtuyen_2018_d1[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_2018_d1[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_2018_d1[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_d1[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_d1[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_d1[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_d1[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable8');
        $('<table>').html(
            "<caption><h2>Trúng tuyển 2018 đợt 2</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_trungtuyen_2018_d2[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_2018_d2[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_2018_d2[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_d2[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_d2[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_d2[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_d2[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytable9');
        console.log(data.chitieu_2017);
        console.log(data.trungtuyen_2017);
        console.log(data.diem_2017);

        // Define the data 
        function generateData(dataAPI1, dataAPI2) {
            var data = [];
            for (var i = 0; i < dataAPI1.length; i++) {
                data.push({
                    x: dataAPI1[i],
                    y: dataAPI2[i]
                });
            }
            return data;
        }
        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgba(" + r + "," + g + "," + b + ",0.5)";
        };
        console.log(generateData(data.chitieu_2017, data.trungtuyen_2017));

        // End Defining data
        new Chart(document.getElementById("myChart").getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Điểm - Chỉ Tiêu',
                    borderColor: dynamicColors(),
                    backgroundColor: "rgba(62, 149, 205, 1)",
                    data: generateData(data.chitieu_2017, data.diem_2017)
                }, {
                    label: 'Điểm - Trúng tuyển',
                    borderColor: dynamicColors(),
                    backgroundColor: "rgba(255, 10, 77, 1)",
                    data: generateData(data.trungtuyen_2017, data.diem_2017)
                }]
            },
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                title: {
                    display: true,
                    text: "Tương quan điểm và thí sinh 2017",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Điểm',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Số Lượng',
                            fontSize: 20.0,
                        }
                    }]
                }
            }
        });
        new Chart(document.getElementById("myChart1").getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Điểm - Chỉ Tiêu',
                    borderColor: dynamicColors(),
                    backgroundColor: "rgba(62, 149, 205, 1)",
                    data: generateData(data.chitieu_2018, data.diem_2018)
                }, {
                    label: 'Điểm - Trúng tuyển',
                    borderColor: dynamicColors(),
                    backgroundColor: "rgba(255, 10, 77, 1)",
                    data: generateData(data.trungtuyen_2018, data.diem_2018)
                }]
            },
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                title: {
                    display: true,
                    text: "Tương quan điểm và thí sinh 2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Điểm',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Số Lượng',
                            fontSize: 20.0,
                        }
                    }]
                }
            }
        });
        new Chart(document.getElementById("genderChart18"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {
                        indexLabel: "{x}, {y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "horizontal",
                        label: "Chỉ tiêu",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_chitieu_data_2018_cq,
                    },
                    {
                        label: "Tổng đăng kí xét tuyển",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_tongDKXT_data_2018_cq,
                    },
                    {
                        label: "Đăng kí xét tuyển NV1",
                        backgroundColor: "rgba(155, 10, 77, 0.5)",
                        borderColor: "rgba(155, 10, 77, 1)",
                        pointBackgroundColor: "rgba(155, 10, 77, 1)",
                        data: data.sta_DKXTNV1_data_2018_cq,
                    },
                    {
                        label: "Trúng tuyển",
                        backgroundColor: "rgba(155, 100, 77, 0.5)",
                        borderColor: "rgba(155, 100, 77, 1)",
                        pointBackgroundColor: "rgba(155, 10, 77, 1)",
                        data: data.sta_trungtuyen_data_2018_cq,
                    },
                    {
                        label: "Nhập học",
                        backgroundColor: "rgba(155, 10, 177, 0.5)",
                        borderColor: "rgba(155, 10, 177, 1)",
                        pointBackgroundColor: "rgba(155, 10, 177, 1)",
                        data: data.sta_nhaphoc_data_2018_cq,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "STA Chính Quy 2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        $('<table>').html(
            "<caption><h2>Nhập học ở các tỉnh 2018</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Cate </strong>  </th>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td> <strong> Chỉ tiêu </strong></td>" +
            "<td>" + data.sta_chitieu_data_2018_cq[0] + "</td>" +
            "<td>" + data.sta_chitieu_data_2018_cq[1] + "</td>" +
            "<td>" + data.sta_chitieu_data_2018_cq[2] + "</td> " +
            "<td>" + data.sta_chitieu_data_2018_cq[3] + "</td> " +
            "<td>" + data.sta_chitieu_data_2018_cq[4] + "</td> " +
            "<td>" + data.sta_chitieu_data_2018_cq[5] + "</td> " +
            "<td>" + data.sta_chitieu_data_2018_cq[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td> <strong> Tổng ĐKXT </strong></td>" +
            "<td>" + data.sta_tongDKXT_data_2018_cq[0] + "</td>" +
            "<td>" + data.sta_tongDKXT_data_2018_cq[1] + "</td>" +
            "<td>" + data.sta_tongDKXT_data_2018_cq[2] + "</td> " +
            "<td>" + data.sta_tongDKXT_data_2018_cq[3] + "</td> " +
            "<td>" + data.sta_tongDKXT_data_2018_cq[4] + "</td> " +
            "<td>" + data.sta_tongDKXT_data_2018_cq[5] + "</td> " +
            "<td>" + data.sta_tongDKXT_data_2018_cq[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td> <strong> DKXT NV1 </strong></td>" +
            "<td>" + data.sta_DKXTNV1_data_2018_cq[0] + "</td>" +
            "<td>" + data.sta_DKXTNV1_data_2018_cq[1] + "</td>" +
            "<td>" + data.sta_DKXTNV1_data_2018_cq[2] + "</td> " +
            "<td>" + data.sta_DKXTNV1_data_2018_cq[3] + "</td> " +
            "<td>" + data.sta_DKXTNV1_data_2018_cq[4] + "</td> " +
            "<td>" + data.sta_DKXTNV1_data_2018_cq[5] + "</td> " +
            "<td>" + data.sta_DKXTNV1_data_2018_cq[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td> <strong> Trúng tuyển </strong></td>" +
            "<td>" + data.sta_trungtuyen_data_2018_cq[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_data_2018_cq[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_data_2018_cq[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_data_2018_cq[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_data_2018_cq[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_data_2018_cq[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_data_2018_cq[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td> <strong> Nhập học </strong></td>" +
            "<td>" + data.sta_nhaphoc_data_2018_cq[0] + "</td>" +
            "<td>" + data.sta_nhaphoc_data_2018_cq[1] + "</td>" +
            "<td>" + data.sta_nhaphoc_data_2018_cq[2] + "</td> " +
            "<td>" + data.sta_nhaphoc_data_2018_cq[3] + "</td> " +
            "<td>" + data.sta_nhaphoc_data_2018_cq[4] + "</td> " +
            "<td>" + data.sta_nhaphoc_data_2018_cq[5] + "</td> " +
            "<td>" + data.sta_nhaphoc_data_2018_cq[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytableCQ');
        coloR = []
        for (var i in data.nghanh_data_2018_cq) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("MyPie"), {
            type: 'pie',
            data: {
                labels: data.nghanh_data_2018_cq,
                datasets: [{
                    data: data.chitieu_data_2018_cq,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Chỉ tiêu các nghành 2018'
                }
            }
        });
        ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_data_2018_cq,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
                
            },

            "series":
                [
                    {
                        "values": data.chitieu_data_2018_cq
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPie',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("MyPie1"), {
            type: 'pie',
            data: {
                labels: data.nghanh_data_2018_cq,
                datasets: [{
                    data: data.tongDKXT_data_2018_cq,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Tổng đăng kí xét tuyển các nghành 2018'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_data_2018_cq,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.tongDKXT_data_2018_cq
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPie1',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("MyPie2"), {
            type: 'pie',
            data: {
                labels: data.nghanh_data_2018_cq,
                datasets: [{
                    data: data.DKXTNV1_data_2018_cq,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Đăng kí xét tuyển NV1 các nghành 2018'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_data_2018_cq,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.DKXTNV1_data_2018_cq
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPie2',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("MyPie3"), {
            type: 'pie',
            data: {
                labels: data.nghanh_data_2018_cq,
                datasets: [{
                    data: data.trungtuyen_data_2018_cq,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển các nghành 2018'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_data_2018_cq,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.trungtuyen_data_2018_cq
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPie3',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("MyPie4"), {
            type: 'pie',
            data: {
                labels: data.nghanh_data_2018_cq,
                datasets: [{
                    data: data.nhaphoc_data_2018_cq,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Số lượng nhập học các nghành 2018'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_data_2018_cq,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.nhaphoc_data_2018_cq
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPie4',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("myChartCQ").getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Chỉ tiêu - Nhập học',
                    borderColor: dynamicColors(),
                    backgroundColor: "rgba(62, 149, 205, 1)",
                    data: generateData(data.chitieu_data_2018_cq, data.nhaphoc_data_2018_cq)
                }]
            },
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                title: {
                    display: true,
                    text: "Tương quan số lượng chỉ tiêu và nhập học",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Nhập học',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Chỉ Tiêu',
                            fontSize: 20.0,
                        }
                    }]
                }
            }
        });
        //*********************************Sheet TX***************************************** */
        new Chart(document.getElementById("MyPieTX"), {
            type: 'pie',
            data: {
                labels: data.nghanh_data_2018_tx,
                datasets: [{
                    data: data.trungtuyen_data_2018_tx,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển các ngành 2018 Thường xuyên'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_data_2018_tx,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                itemsOverlap: true,
                'max-items':60,
                "bold":true,
                "auto-fit" : true
            },
            
            "series":
                [
                    {
                        "values": data.trungtuyen_data_2018_tx
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPieTX',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("genderChartTX1"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {
                        indexLabel: "{x}, {y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "horizontal",
                        label: "Số lượng",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_trungtuyen_data_2018_tx,
                    }
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "STA trúng tuyển 2018 Thường xuyên",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        $('<table>').html(
            "<caption><h2>STA trúng tuyển 2018 thường xuyên</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_trungtuyen_data_2018_tx[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_data_2018_tx[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_data_2018_tx[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_data_2018_tx[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_data_2018_tx[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_data_2018_tx[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_data_2018_tx[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytableTX');
        //****************Sheet CH************** */
        new Chart(document.getElementById("MyPieCH"), {
            type: 'pie',
            data: {
                labels: data.nghanh_data_2018_ch,
                datasets: [{
                    data: data.duthi_data_2018_ch,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Số lượng dự thi các nghành 2018 chính quy'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_data_2018_ch,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.duthi_data_2018_ch
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPieCH',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("MyPieCH1"), {
            type: 'pie',
            data: {
                labels: data.nghanh_data_2018_ch,
                datasets: [{
                    data: data.trungtuyen_data_2018_ch,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển các nghành 2018 chính quy'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.nghanh_data_2018_ch,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.trungtuyen_data_2018_ch
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPieCH1',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("myChartCH").getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Dự thi - Trúng tuyển',
                    borderColor: dynamicColors(),
                    backgroundColor: "rgba(62, 149, 205, 1)",
                    data: generateData(data.duthi_data_2018_ch, data.trungtuyen_data_2018_ch)
                }]
            },
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                title: {
                    display: true,
                    text: "Tương quan số lượng dự thi và trúng tuyển",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Trúng tuyển',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Dự Thi',
                            fontSize: 20.0,
                        }
                    }]
                }
            }
        });
        //*************************SHEET TINH******************* */
        new Chart(document.getElementById("genderChartTINH"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {
                        indexLabel: "{x}, {y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "horizontal",
                        label: "Số lượng",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_soluong_dk_data_2018_tinh,
                    }
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Số lượng dự thi ở các tỉnh 2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        $('<table>').html(
            "<caption><h2>STA số lượng đăng kí ở các tỉnh</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_soluong_dk_data_2018_tinh[0] + "</td>" +
            "<td>" + data.sta_soluong_dk_data_2018_tinh[1] + "</td>" +
            "<td>" + data.sta_soluong_dk_data_2018_tinh[2] + "</td> " +
            "<td>" + data.sta_soluong_dk_data_2018_tinh[3] + "</td> " +
            "<td>" + data.sta_soluong_dk_data_2018_tinh[4] + "</td> " +
            "<td>" + data.sta_soluong_dk_data_2018_tinh[5] + "</td> " +
            "<td>" + data.sta_soluong_dk_data_2018_tinh[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytableTINH');
        new Chart(document.getElementById("genderChartTINH1"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {
                        indexLabel: "{x}, {y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "horizontal",
                        label: "Số lượng",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_trungtuyen_d1_data_2018_tinh,
                    }
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Trúng tuyển đợt 1 ở các tỉnh 2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        $('<table>').html(
            "<caption><h2>STA trúng tuyển đợt 1 ở các tỉnh</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_trungtuyen_d1_data_2018_tinh[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_d1_data_2018_tinh[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_d1_data_2018_tinh[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_d1_data_2018_tinh[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_d1_data_2018_tinh[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_d1_data_2018_tinh[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_d1_data_2018_tinh[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytableTINH1');
        new Chart(document.getElementById("genderChartTINH2"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {
                        indexLabel: "{x}, {y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "horizontal",
                        label: "Số lượng",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_trungtuyen_d2_data_2018_tinh,
                    }
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Trúng tuyển đợt 2 ở các tỉnh 2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        $('<table>').html(
            "<caption><h2>Trúng tuyển đợt 2 ở các tỉnh</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_trungtuyen_d2_data_2018_tinh[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_d2_data_2018_tinh[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_d2_data_2018_tinh[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_d2_data_2018_tinh[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_d2_data_2018_tinh[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_d2_data_2018_tinh[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_d2_data_2018_tinh[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytableTINH2');
        new Chart(document.getElementById("genderChartTINH3"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {
                        indexLabel: "{x}, {y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "horizontal",
                        label: "Số lượng",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_nhaphoc_data_2018_tinh,
                    }
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "Số lượng nhập học ở các tỉnh 2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        $('<table>').html(
            "<caption><h2>Nhập học ở các tỉnh 2018</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th> <strong> Min </strong>  </th>" +
            "<th> <strong> Max </strong></th> " +
            "<th> <strong> Sum </strong></th>" +
            "<th> <strong> Count </strong></th>" +
            "<th> <strong> Var </strong></th>" +
            "<th> <strong> Std </strong></th>" +
            "<th> <strong> Mean </strong></th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>" + data.sta_nhaphoc_data_2018_tinh[0] + "</td>" +
            "<td>" + data.sta_nhaphoc_data_2018_tinh[1] + "</td>" +
            "<td>" + data.sta_nhaphoc_data_2018_tinh[2] + "</td> " +
            "<td>" + data.sta_nhaphoc_data_2018_tinh[3] + "</td> " +
            "<td>" + data.sta_nhaphoc_data_2018_tinh[4] + "</td> " +
            "<td>" + data.sta_nhaphoc_data_2018_tinh[5] + "</td> " +
            "<td>" + data.sta_nhaphoc_data_2018_tinh[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#mytableTINH3');
        coloR = []
        for (var i in data.tinh_data_2018_tinh) {

            coloR.push(dynamicColors());
        }
        new Chart(document.getElementById("MyPieTINH"), {
            type: 'pie',
            data: {
                labels: data.tinh_data_2018_tinh,
                datasets: [{
                    data: data.soluong_dk_data_2018_tinh,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Số lượng đăng kí ở các tỉnh 2018'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.tinh_data_2018_tinh,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.soluong_dk_data_2018_tinh
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPieTINH',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("MyPieTINH1"), {
            type: 'pie',
            data: {
                labels: data.tinh_data_2018_tinh,
                datasets: [{
                    data: data.trungtuyen_d1_data_2018_tinh,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển đợt 1 ở các tỉnh 2018'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.tinh_data_2018_tinh,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.trungtuyen_d1_data_2018_tinh
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPieTINH1',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("MyPieTINH2"), {
            type: 'pie',
            data: {
                labels: data.tinh_data_2018_tinh,
                datasets: [{
                    data: data.trungtuyen_d2_data_2018_tinh,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Trúng tuyển đợt 2 ở các tỉnh 2018'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.tinh_data_2018_tinh,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.trungtuyen_d2_data_2018_tinh
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPieTINH2',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("MyPieTINH3"), {
            type: 'pie',
            data: {
                labels: data.tinh_data_2018_tinh,
                datasets: [{
                    data: data.nhaphoc_data_2018_tinh,
                    backgroundColor: coloR,
                    borderColor: 'rgba(200, 200, 200, 0.75)',
                    pointBackgroundColor: "rgba(255, 10, 77, 1)",
                    hoverBorderColor: 'rgba(200, 200, 200, 1)',
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Nhập học ở các tỉnh 2018'
                }
            }
        });
        var myConfig = {
            "type": "heatmap",

            'scale-y': {
                values: ["Số lượng"],
                item: {
                    angle: -90,
                },
            },
            'scale-x': {
                labels: data.tinh_data_2018_tinh,  //X-Axis Scale Labels
                'line-color': "none",   //Axis Lines
                guide: {              //Plot Lines
                    visible: false
                },
                tick: {               //Tick Marks
                    visible: false
                },
                placement: "opposite", //To change the placement of your axis.,
                item: {
                    angle: -90,
                },
                'items-overlap': true,
                'max-items':60,
            },

            "series":
                [
                    {
                        "values": data.nhaphoc_data_2018_tinh
                    }
                ]
        };

        zingchart.render({
            id: 'heatmapPieTINH3',
            data: myConfig,
            height: "100%",
            width: "100%"
        });
        new Chart(document.getElementById("myChartTINH").getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Số lượng đăng kí - Nhập học',
                    borderColor: dynamicColors(),
                    backgroundColor: "rgba(62, 149, 205, 1)",
                    data: generateData(data.soluong_dk_data_2018_tinh, data.nhaphoc_data_2018_tinh)
                }]
            },
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                title: {
                    display: true,
                    text: "Tương quan số lượng đăng kí và nhập học",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Nhập học',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Đăng kí',
                            fontSize: 20.0,
                        }
                    }]
                }
            }
        });
        new Chart(document.getElementById("myChartTX2017d1").getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Điểm - Trúng tuyển',
                    borderColor: dynamicColors(),
                    backgroundColor: "rgba(62, 149, 205, 1)",
                    data: generateData(data.trungtuyen_tx_2017_d1, data.diem_2017_d1)
                }]
            },
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                title: {
                    display: true,
                    text: "Tương quan điểm và trúng tuyển 2017 đợt 1",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Điểm',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Trúng tuyển',
                            fontSize: 20.0,
                        }
                    }]
                }
            }
        });
        new Chart(document.getElementById("myChartTX2017d2").getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Điểm - Trúng tuyển',
                    borderColor: dynamicColors(),
                    backgroundColor: "rgba(62, 149, 205, 1)",
                    data: generateData(data.trungtuyen_tx_2017_d2, data.diem_2017_d2)
                }]
            },
            options: {
                responsive: true, // Instruct chart js to respond nicely.
                maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                title: {
                    display: true,
                    text: "Tương quan điểm và trúng tuyển 2017 đợt 2",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Điểm',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Trúng tuyển',
                            fontSize: 20.0,
                        }
                    }]
                }
            }
        });
        $('<span>').html(
            data.pearson_chitieu_diem_2017
        ).appendTo('#pearson1');
        $('<span>').html(
            data.spearman_chitieu_diem_2017
        ).appendTo('#spearman1');
        $('<span>').html(
            data.pearson_trungtuyen_diem_2017
        ).appendTo('#pearson2');
        $('<span>').html(
            data.spearman_trungtuyen_diem_2017
        ).appendTo('#spearman2');
        $('<span>').html(
            data.pearson_chitieu_diem_2018
        ).appendTo('#pearson3');
        $('<span>').html(
            data.spearman_chitieu_diem_2018
        ).appendTo('#spearman3');
        $('<span>').html(
            data.pearson_trungtuyen_diem_2018
        ).appendTo('#pearson4');
        $('<span>').html(
            data.spearman_trungtuyen_diem_2018
        ).appendTo('#spearman4');
        $('<span>').html(
            data.pearson_trungtuyen_diem_2017_d1
        ).appendTo('#pearson5');
        $('<span>').html(
            data.spearman_trungtuyen_diem_2017_d1
        ).appendTo('#spearman5');
        $('<span>').html(
            data.pearson_trungtuyen_diem_2017_d2
        ).appendTo('#pearson6');
        $('<span>').html(
            data.spearman_trungtuyen_diem_2017_d2
        ).appendTo('#spearman6');
        $('<span>').html(
            data.pearson_chitieu_nhaphoc_2018_cq
        ).appendTo('#pearson7');
        $('<span>').html(
            data.spearman_chitieu_nhaphoc_2018_cq
        ).appendTo('#spearman7');
        $('<span>').html(
            data.pearson_duthi_trungtuyen_2018_ch
        ).appendTo('#pearson8');
        $('<span>').html(
            data.spearman_duthi_trungtuyen_2018_ch
        ).appendTo('#spearman8');
        $('<span>').html(
            data.pearson_dangky_trungtuyen_2018_tinh
        ).appendTo('#pearson9');
        $('<span>').html(
            data.spearman_dangky_trungtuyen_2018_tinh
        ).appendTo('#spearman9');
    },
    error: function (data) {
        console.log('Error!');
    }
});
$(function () {
    $("#excelsheet").load("static/tableexcel/Trang.htm");
    $("#excelsheet1").load("static/tableexcel/Trang1.htm");
    $("#excelsheet2").load("static/tableexcel/Trang2.htm");
    $("#excelsheet3").load("static/tableexcel/Trang3.htm");
    $("#excelsheetCQ").load("static/tableexcel/CQ2018.htm");
    $("#excelsheetCH").load("static/tableexcel/CH2018.htm");
    $("#excelsheetTX").load("static/tableexcel/TX2018.htm");
    $("#excelsheetTINH").load("static/tableexcel/TINH2018.htm");
});
// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}