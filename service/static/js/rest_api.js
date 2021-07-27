$(function () {

    // ****************************************
    //  U T I L I T Y   F U N C T I O N S
    // ****************************************

    // Updates the form with data from the response
    function update_form_data(res) {
        var toDoubleDigits = function(num) {
            num += "";
            if (num.length === 1) {
                num = "0" + num;
            }
            return num;     
        };
        var start_date = Date.parse(res.start_date);
        var start_dateObject = new Date(start_date);
        var format_start_year = start_dateObject.getUTCFullYear();
        var format_start_month = toDoubleDigits(start_dateObject.getUTCMonth()+1);
        var format_start_date = toDoubleDigits(start_dateObject.getUTCDate());
        var end_date = Date.parse(res.end_date);
        var end_dateObject = new Date(end_date);
        var format_end_year = end_dateObject.getUTCFullYear();
        var format_end_month = toDoubleDigits(end_dateObject.getUTCMonth()+1);
        var format_end_date = toDoubleDigits(end_dateObject.getUTCDate());
        
        $("#promotion_id").val(res.id);
        $("#promotion_title").val(res.title);
        $("#promotion_promotion_type").val(res.promotion_type);
        $("#promotion_start_date").val([format_start_year, format_start_month, format_start_date].join('-'));
        $("#promotion_end_date").val([format_end_year, format_end_month, format_end_date].join('-'));
        if (res.active == true) {
            $("#promotion_active").val("true");
        } else {
            $("#promotion_active").val("false");
        }
    }

    /// Clears all form fields
    function clear_form_data() {
        $("#promotion_title").val("");
        $("#promotion_promotion_type").val("");
        $("#promotion_start_date").val("");
        $("#promotion_end_date").val("");
        $("#promotion_active").val("");
    }

    // Updates the flash message area
    function flash_message(message) {
        $("#flash_message").empty();
        $("#flash_message").append(message);
    }

    // ****************************************
    // Create a Promotion
    // ****************************************

    $("#create-btn").click(function () {

        var title = $("#promotion_title").val();
        var type = $("#promotion_promotion_type").val();
        var start_date = $("#promotion_start_date").val();
        var end_date = $("#promotion_end_date").val();
        var active = $("#promotion_active").val() == "true";

        var data = {
            "title": title,
            "promotion_type": type,
            "start_date": start_date,
            "end_date": end_date,
            "active": active
        };

        var ajax = $.ajax({
            type: "POST",
            url: "/promotions",
            contentType: "application/json",
            data: JSON.stringify(data),
        });

        ajax.done(function(res){
            update_form_data(res)
            flash_message("Success")
        });

        ajax.fail(function(res){
            flash_message(res.responseJSON.message)
        });
    });


    // ****************************************
    // Update a Promotion
    // ****************************************

    $("#update-btn").click(function () {

        var promotion_id = $("#promotion_id").val();
        var title = $("#promotion_title").val();
        var type = $("#promotion_promotion_type").val();
        var start_date = $("#promotion_start_date").val();
        var end_date = $("#promotion_end_date").val();
        var active = $("#promotion_active").val();

        var data = {
            "title": title,
            "promotion_type": type,
            "start_date": start_date,
            "end_date": end_date,
            "active": active
        };

        var ajax = $.ajax({
                type: "PUT",
                url: "/promotions/" + promotion_id,
                contentType: "application/json",
                data: JSON.stringify(data)
            })

        ajax.done(function(res){
            update_form_data(res)
            flash_message("Success")
        });

        ajax.fail(function(res){
            flash_message(res.responseJSON.message)
        });

    });

    // ****************************************
    // Retrieve a Promotion
    // ****************************************

    $("#retrieve-btn").click(function () {

        var promotion_id = $("#promotion_id").val();

        var ajax = $.ajax({
            type: "GET",
            url: "/promotions/" + promotion_id,
            contentType: "application/json",
            data: ''
        })

        ajax.done(function(res){
            //alert(res.toSource())
            update_form_data(res)
            flash_message("Success")
        });

        ajax.fail(function(res){
            clear_form_data()
            flash_message(res.responseJSON.message)
        });

    });

    // ****************************************
    // Delete a Promotion
    // ****************************************

    $("#delete-btn").click(function () {

        var promotion_id = $("#promotion_id").val();

        var ajax = $.ajax({
            type: "DELETE",
            url: "/promotions/" + promotion_id,
            contentType: "application/json",
            data: '',
        })

        ajax.done(function(res){
            clear_form_data()
            flash_message("Promotion has been Deleted!")
        });

        ajax.fail(function(res){
            flash_message("Server error!")
        });
    });

    // ****************************************
    // Activate a Promotion
    // ****************************************

    $("#activate-btn").click(function () {

        var promotion_id = $("#promotion_id").val();
        
        var ajax = $.ajax({
                type: "PUT",
                url: "/promotions/" + promotion_id + "/activate",
                contentType: "application/json",
                data: ''
            })

        ajax.done(function(res){
            update_form_data(res)
            flash_message("Promotion has been activated!")
        });

        ajax.fail(function(res){
            flash_message(res.responseJSON.message)
        });

    });

    // ****************************************
    // Deactivate a Promotion
    // ****************************************

    $("#deactivate-btn").click(function () {

        var promotion_id = $("#promotion_id").val();
        
        var ajax = $.ajax({
                type: "PUT",
                url: "/promotions/" + promotion_id + "/deactivate",
                contentType: "application/json",
                data: ''
            })

        ajax.done(function(res){
            update_form_data(res)
            flash_message("Promotion has been deactivated!")
        });

        ajax.fail(function(res){
            flash_message(res.responseJSON.message)
        });

    });

    // ****************************************
    // Clear the form
    // ****************************************

    $("#clear-btn").click(function () {
        $("#promotion_id").val("");
        clear_form_data()
    });

    // ****************************************
    // Search for a Promotion
    // ****************************************

    $("#search-btn").click(function () {

        var title = $("#promotion_title").val();
        var type = $("#promotion_promotion_type").val();
        var active = $("#promotion_active").val() == "true";

        var queryString = ""

        if (title) {
            queryString += 'title=' + title
        }
        if (type) {
            if (queryString.length > 0) {
                queryString += '&type=' + type
            } else {
                queryString += 'type=' + type
            }
        }
        if (active) {
            if (queryString.length > 0) {
                queryString += '&active=' + active
            } else {
                queryString += 'active=' + active
            }
        }

        var ajax = $.ajax({
            type: "GET",
            url: "/promotions?" + queryString,
            contentType: "application/json",
            data: ''
        })

        ajax.done(function(res){
            //alert(res.toSource())
            $("#search_results").empty();
            $("#search_results").append('<table class="table-bordered" cellpadding="10">');
            var header = '<tr>'
            header += '<th style="width:10%">ID</th>'
            header += '<th style="width:20%">Title</th>'
            header += '<th style="width:20%">Type</th>'
            header += '<th style="width:20%">Start_Date</th>'
            header += '<th style="width:20%">End_Date</th>'
            header += '<th style="width:10%">Active</th></tr>'
            $("#search_results").append(header);
            var firstPromotion = "";
            for(var i = 0; i < res.length; i++) {
                var promotion = res[i];
                var toDoubleDigits = function(num) {
                    num += "";
                    if (num.length === 1) {
                        num = "0" + num;
                    }
                    return num;     
                };
                var start_date = Date.parse(promotion.start_date);
                var start_dateObject = new Date(start_date);
                var format_start_year = start_dateObject.getUTCFullYear();
                var format_start_month = toDoubleDigits(start_dateObject.getUTCMonth()+1);
                var format_start_date = toDoubleDigits(start_dateObject.getUTCDate());
                var end_date = Date.parse(promotion.end_date);
                var end_dateObject = new Date(end_date);
                var format_end_year = end_dateObject.getUTCFullYear();
                var format_end_month = toDoubleDigits(end_dateObject.getUTCMonth()+1);
                var format_end_date = toDoubleDigits(end_dateObject.getUTCDate());
                var row = "<tr><td>"+promotion.id+"</td><td>"+promotion.title+"</td><td>"+promotion.promotion_type+"</td><td>"+[format_start_year, format_start_month, format_start_date].join('-')+"</td><td>"+[format_end_year, format_end_month, format_end_date].join('-')+"</td><td>"+promotion.active+"</td></tr>";
                $("#search_results").append(row);
                if (i == 0) {
                    firstPromotion = promotion;
                }
            }

            $("#search_results").append('</table>');

            // copy the first result to the form
            if (firstPromotion != "") {
                update_form_data(firstPromotion)
            }

            flash_message("Success")
        });

        ajax.fail(function(res){
            flash_message(res.responseJSON.message)
        });

    });

})
