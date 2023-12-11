
function add_nepali_date_picker(frmField, nepali_date_field , english_date_convert_field) {   
    if (typeof $.fn.nepaliDatePicker !== 'undefined') {
        $(frmField.fields_dict[nepali_date_field].input).nepaliDatePicker({
            ndpYear: true,
            ndpMonth: true,
            ndpYearCount: 10,
            onChange: function(e) {
                var date_format_converted = new Date(e.ad);
                if (frmField.fields_dict[english_date_convert_field] && frmField.fields_dict[english_date_convert_field].df.fieldtype == "Datetime") {
                    var time = "00:00:00";
                    date_format_converted = date_format_converted.toISOString().split("T")[0] + " " + time;
                } 
                frappe.model.set_value(frmField.doctype, frmField.docname, nepali_date_field, e.bs);
                frappe.model.set_value(frmField.doctype, frmField.docname, english_date_convert_field, date_format_converted);
            }
        }); 

        // set max length for nepali date field
        $(frmField.fields_dict[nepali_date_field].input).attr("maxlength", 10);

        $(frmField.fields_dict[nepali_date_field].input).on("change", function() {
            var nepali_date = $(this).val();
            frappe.model.set_value(frmField.doctype, frmField.docname, nepali_date_field, nepali_date);
        
            if (/^[0-9-]+$/.test(nepali_date) && nepali_date.length == 10) {
                var date = nepali_date.split("-");
                var year = date[0];
                var month = date[1];
                var day = date[2];
                if (year.length == 4 && month.length == 2 && day.length == 2) {
                    frappe.model.set_value(frmField.doctype, frmField.docname, nepali_date_field, nepali_date);
                } else {
                    frappe.model.set_value(frmField.doctype, frmField.docname, nepali_date_field, "");
                    $(frmField.fields_dict[nepali_date_field].input).focus();
                }
            } else {
                frappe.model.set_value(frmField.doctype, frmField.docname, nepali_date_field, "");
                $(frmField.fields_dict[nepali_date_field].input).focus();
            }
        });        

    }
   
    
}

// This function is not used it was just for testing purpose
function convert_ADBS(frmField, english_date_field, nepali_date_field) {
    
    if (frmField.fields_dict[english_date_field].df.fieldtype == "Datetime" || frmField.fields_dict[english_date_field].df.fieldtype == "Date") {
    
        var english_date = frmField.fields_dict[english_date_field].value;

        if (english_date && english_date.includes && english_date.includes("GMT")) {
            var date_format_converted = new Date(english_date);
            english_date = date_format_converted.toISOString().split("T")[0];
        }

       
        if (english_date && english_date.includes && english_date.includes(" ")) {
            english_date = english_date.split(" ")[0];
        }
      
        var nepali_date = NepaliFunctions.AD2BS(english_date, "YYYY-MM-DD", "YYYY-MM-DD");
        frappe.model.set_value(frmField.doctype, frmField.docname, nepali_date_field, nepali_date);
    } else {
        frappe.model.set_value(frmField.doctype, frmField.docname, nepali_date_field, "");
    }
}



     

