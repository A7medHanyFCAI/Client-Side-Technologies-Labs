'use strict';
$(document).ready(function(){
    $('#projects').tabs()

    $("ul").sortable({axis:"x",containment:"#projects"})

    $("ol").sortable({axis:"y",containment:"#projects"})

    $("#btnAddProject").button().click(function(){
        $('#project-dialog').dialog({width:400, resizable:false, modal:true,
            buttons:{
                "Add new Project": function(){
                    let projectName = $("#new-project").val()
                    let replaceName = projectName.split(" ").join("_")
                    $('#main').append(`<li><a href="#${projectName}">${projectName}</a><span class="ui-icon ui-icon-close"></span></li>`)
                    let newOl = $(`<ol id="${replaceName}"></ol>`).sortable({axis:"y", containment:"#projects"});
                    $('#projects').append(newOl);   
                   
                    $('#projects').tabs("refresh")

                    let tabCount = $("#project .ui-tabs-nav li").length
                    $('#projects').tabs("option", "active", tabCount-1)

                    
                    $("#new-project").val("");
                    $(this).dialog("close");

                },
                "Cancel": function(){
                    $("#new-project").val("");
                    $(this).dialog("close");
                }
            }
        })
    })


    $("#btnAddTask").button().click(function(){
        $("#task-dialog").dialog({width:400, resizable:false, modal:true,
            buttons:{
                "Add new Task": function(){
                    
                    let taskName = $("#new-task").val()

                    let activeTab =  $('#projects').tabs("option", "active")
                    let title = $(`#main > li:nth-child(${activeTab+1}) > a`).attr("href")
                    $(`#projects ${title}`).append(`<li><input type="checkbox">${taskName}</li>`); 


                    $("#new-task").val("");
                    $(this).dialog("close")
                },
                "Cancel":function(){
                    $("#new-task").val("");
                    $(this).dialog("close")
                }
            }
        })
    })

    $("#projects").on('click',"input[type=checkbox]",function(){
        $(this).closest("li").slideUp(function(){
            $(this).remove()
        })
    })


    $("#projects").on('click',"span.ui-icon-close",function(){
        let index = $(this).closest("li").index()
        let id = $(`#main li:eq(${index}) a`).attr("href")
        $(`#main li:eq(${index})`).remove()
        $(id).remove();
        $('#projects').tabs("refresh")
    })
});
