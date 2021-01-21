sap.ui.controller("listreport4.ext.controller.ObjectPageExt", {
    onClickSUPPLIERSet : function(oEvent) { 
        alert('onClickSUPPLIERSet');
    },
    onEditST:function(){
        debugger;
        // alert("Edit");
        var table = this.getView().byId("LineItemsSmartTable9");
        
        // var aItems = table.getSelectedItems();

        var gettingInternalTable = this.byId("LineItemsSmartTable9").getTable(),
                gettingAllRows = gettingInternalTable.getRows();
                oSelIndices = gettingInternalTable.getSelectedIndices();
//oSelIndices will have index of the rows
for(var i of oSelIndices){
var obj = gettingAllRows[i].getBindingContext().getObject();
 var SID = obj.Supplierid
 var PID = obj.Productid
 var Sname = obj.Suppliername
 var description = obj.Description
 var qua = obj.Quantity


 var Payload = {};
                
                Payload.Supplierid = SID;
                Payload.Productid = PID;
                Payload.Suppliername = Sname;
                Payload.Description = description;
                Payload.Quantity = qua; 


                var oModel10 = this.getOwnerComponent().getModel();
                oModel10.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
                oModel10.setUseBatch(true);

                oModel10.setDeferredGroups(["myGroupId"]); 
                var group =  oModel10.getDeferredGroups();
                            
                oModel10.setDeferredGroups(oModel10.getDeferredGroups().concat(["myGroupId"]));
                                
                var mParameters = {groupId:"myGroupId",success:function(odata, resp){
                                    console.log(resp);
                                    // alert("Success");

                } ,
                 error: function(odata, resp) {

                    console.log(resp);

                }};

                oModel10.update("/SUPPLIERSet('" + SID + "')", Payload, mParameters);
                                    
                
};

                oModel10.submitChanges(mParameters);
                // sap.m.MessageToast.show("Updated Succesfully");
                sap.m.MessageBox.success("Updated Succesfully!");
                this.getView().byId("LineItemsSmartTable9").removeSelections(true) 




    },
    onEdit:function(){
        debugger;
        var oTable1 = this.byId("secondTable");
        var oView = this.getView();
       

         var aArray = [];
       
       
        var aItems = oTable1.getSelectedItems();
         for(var i = 0; i < aItems.length; i++){
   var edit = aItems[i].getAggregation("cells")[0].getProperty("editable");
    if(aItems[i].getAggregation("cells")[0].getProperty("editable")==edit){
       var SID = aItems[i].getAggregation("cells")[0].getProperty("value");
       var Sname =aItems[i].getAggregation("cells")[1].getProperty("value");
        var  PID= aItems[i].getAggregation("cells")[2].getProperty("value");
      var qua = aItems[i].getAggregation("cells")[3].getProperty("value");
    var description =  aItems[i].getAggregation("cells")[4].getProperty("value");
    


      var Payload = {};
      Payload.Supplierid = SID;
      Payload.Productid = PID;
      Payload.Suppliername = Sname;
      Payload.Description = description;
      Payload.Quantity = qua; 




var oModel10 = this.getOwnerComponent().getModel();
oModel10.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
oModel10.setUseBatch(true);

           
oModel10.setDeferredGroups(["myGroupId"]); 
var group =  oModel10.getDeferredGroups();
           
oModel10.setDeferredGroups(oModel10.getDeferredGroups().concat(["myGroupId"]));
               
var mParameters = {groupId:"myGroupId",success:function(odata, resp){
                   console.log(resp);
                //    alert("Success");
                   


},
error: function(odata, resp) {

                      console.log(resp);
       }};


oModel10.update("/SUPPLIERSet('" + SID + "')", Payload, mParameters);

    }

    }

    oModel10.submitChanges(mParameters);
    // sap.m.MessageToast.show("Updated Succesfully");
    sap.m.MessageBox.success("Updated Succesfully");
   
    this.getView().byId("secondTable").removeSelections(true) 




    },
    onDeleteST:function(){
        debugger;
        // alert("Delete");
        
         var table = this.getView().byId("LineItemsSmartTable9");
        
         // var aItems = table.getSelectedItems();
 
         var gettingInternalTable = this.byId("LineItemsSmartTable9").getTable(),
                 gettingAllRows = gettingInternalTable.getRows();
                 oSelIndices = gettingInternalTable.getSelectedIndices();
                 //oSelIndices will have index of the rows
                for(var i of oSelIndices){
                var obj = gettingAllRows[i].getBindingContext().getObject();
                var SID = obj.Supplierid
    
    
    
     
    
    
                    var oModel10 = this.getOwnerComponent().getModel();
                    oModel10.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
                    oModel10.setUseBatch(true);
    
                    oModel10.setDeferredGroups(["myGroupId"]); 
                    var group =  oModel10.getDeferredGroups();
                                
                    oModel10.setDeferredGroups(oModel10.getDeferredGroups().concat(["myGroupId"]));
                                    
                    var mParameters = {groupId:"myGroupId",success:function(odata, resp){
                                        console.log(resp);
                                        // alert("Success");
    
                    } ,
                     error: function(odata, resp) {
    
                        console.log(resp);
    
                    }};
    
                    
                    oModel10.remove("/SUPPLIERSet('" + SID + "')",  mParameters);
                                        
                    
    };

    oModel10.submitChanges(mParameters);
    // sap.m.MessageToast.show("Updated Succesfully");
    sap.m.MessageBox.success("Deleted Succesfully!");
    this.getView().byId("LineItemsSmartTable9").removeSelections(true) 


    },
    onEdit2:function(){
        debugger;
        var oTable1 = this.byId("thirdTable");
        var oView = this.getView();
       

         var aArray = [];
       
       
        var aItems = oTable1.getSelectedItems();
         for(var i = 0; i < aItems.length; i++){
   var edit = aItems[i].getAggregation("cells")[0].getProperty("editable");
    if(aItems[i].getAggregation("cells")[0].getProperty("editable")==edit){
       var SID = aItems[i].getAggregation("cells")[0].getProperty("value");
       var Sname =aItems[i].getAggregation("cells")[1].getProperty("value");
        var  PID= aItems[i].getAggregation("cells")[2].getProperty("value");
      var qua = aItems[i].getAggregation("cells")[3].getProperty("value");
    var description =  aItems[i].getAggregation("cells")[4].getProperty("value");
    


      var Payload = {};
      Payload.Supplierid = SID;
      Payload.Productid = PID;
      Payload.Suppliername = Sname;
      Payload.Description = description;
      Payload.Quantity = qua; 




var oModel10 = this.getOwnerComponent().getModel();
oModel10.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
oModel10.setUseBatch(true);

           
oModel10.setDeferredGroups(["myGroupId"]); 
var group =  oModel10.getDeferredGroups();
           
oModel10.setDeferredGroups(oModel10.getDeferredGroups().concat(["myGroupId"]));
               
var mParameters = {groupId:"myGroupId",success:function(odata, resp){
                   console.log(resp);
                //    alert("Success");
                   


},
error: function(odata, resp) {

                      console.log(resp);
       }};


oModel10.update("/SUPPLIERSet('" + SID + "')", Payload, mParameters);

    }

    }

    oModel10.submitChanges(mParameters);
    // sap.m.MessageToast.show("Updated Succesfully");
    sap.m.MessageBox.success("Updated Succesfully");
   
    this.getView().byId("thirdTable").removeSelections(true) 

    },

    onDelete:function(){
    debugger;
    var oTable1 = this.byId("secondTable");
    var oView = this.getView();
   

     var aArray = [];
   
   
    var aItems = oTable1.getSelectedItems();
     for(var i = 0; i < aItems.length; i++){
var edit = aItems[i].getAggregation("cells")[0].getProperty("editable");
if(aItems[i].getAggregation("cells")[0].getProperty("editable")==edit){
   var SID = aItems[i].getAggregation("cells")[0].getProperty("value");
   



var oModel10 = this.getOwnerComponent().getModel();
oModel10.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
oModel10.setUseBatch(true);

       
oModel10.setDeferredGroups(["myGroupId"]); 
var group =  oModel10.getDeferredGroups();
       
oModel10.setDeferredGroups(oModel10.getDeferredGroups().concat(["myGroupId"]));
           
var mParameters = {groupId:"myGroupId",success:function(odata, resp){
               console.log(resp);
            //    alert("Success");
               


},
error: function(odata, resp) {

                  console.log(resp);
   }};



oModel10.remove("/SUPPLIERSet('" + SID + "')",  mParameters);

}

}

oModel10.submitChanges(mParameters);
// sap.m.MessageToast.show("Updated Succesfully");
sap.m.MessageBox.success("Deleted Succesfully");

this.getView().byId("secondTable").removeSelections(true);
 this.byId("secondTable").getBinding("items").refresh();
// this.byId("secondTable").getBinding("items").refresh();
this.byId("table0001").getBinding("items").refresh();

    },

    onDelete2:function(){
        debugger;
        var oTable1 = this.byId("thirdTable");
        var oView = this.getView();
       
    
         var aArray = [];
       
       
        var aItems = oTable1.getSelectedItems();
         for(var i = 0; i < aItems.length; i++){
    var edit = aItems[i].getAggregation("cells")[0].getProperty("editable");
    if(aItems[i].getAggregation("cells")[0].getProperty("editable")==edit){
       var SID = aItems[i].getAggregation("cells")[0].getProperty("value");
       
    
    
    
    var oModel10 = this.getOwnerComponent().getModel();
    oModel10.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
    oModel10.setUseBatch(true);
    
           
    oModel10.setDeferredGroups(["myGroupId"]); 
    var group =  oModel10.getDeferredGroups();
           
    oModel10.setDeferredGroups(oModel10.getDeferredGroups().concat(["myGroupId"]));
               
    var mParameters = {groupId:"myGroupId",success:function(odata, resp){
                   console.log(resp);
                //    alert("Success");
                   
    
    
    },
    error: function(odata, resp) {
    
                      console.log(resp);
       }};
    
    
    
    oModel10.remove("/SUPPLIERSet('" + SID + "')",  mParameters);
    
    }
    
    }
    
    oModel10.submitChanges(mParameters);
    // sap.m.MessageToast.show("Updated Succesfully");
    sap.m.MessageBox.success("Deleted Succesfully");
    
    this.getView().byId("thirdTable").removeSelections(true) 
    this.byId("thirdTable").getBinding("items").refresh();
    this.byId("table0001").getBinding("items").refresh();

    },

    
    onClose:function(){
        debugger;
        // this._Dialog.close();
        this.oDialog.close();
        // this.getView().byId("openDl").close();
        // this.getView().byId("openD1").destroy();


    },
    onCreate:function(){
        debugger;
        // var oTable1 = this.byId("table3");
        var oTable1 = sap.ui.core.Fragment.byId("openD1", "table3");
        var oView = this.getView();
        var that = this;
       
       

         var aArray = [];
       
       
        var aItems = oTable1.getSelectedItems();
        for(var i = 0; i < aItems.length; i++){
            var visible = aItems[i].getAggregation("cells")[0].getProperty("visible");
             if(aItems[i].getAggregation("cells")[0].getProperty("visible")==visible){
                var SID = aItems[i].getAggregation("cells")[0].getProperty("text");
                var Sname =aItems[i].getAggregation("cells")[1].getProperty("text");
                 var  PID= aItems[i].getAggregation("cells")[2].getProperty("text");
               var qua = aItems[i].getAggregation("cells")[3].getProperty("text");
             var description =  aItems[i].getAggregation("cells")[4].getProperty("text");


             var Payload = {};
             Payload.Supplierid = SID;
             Payload.Productid = PID;
             Payload.Suppliername = Sname;
             Payload.Description = description;
             Payload.Quantity = qua; 

             var oModel = this.getOwnerComponent().getModel();
             oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
             oModel.setUseBatch(true);
             oModel.create("/SUPPLIERSet", Payload, {
                method: "POST",
                success: function(data) {
                //   alert("Sucess!!!");
                },
                error: function(e) {
    
                }
            });

               }
            }

            oModel.submitChanges({
                success: function(data, response) {
                    //To do
                    // alert("Success");
                    sap.m.MessageBox.success("Created Successfully");
                   
                },
                error: function(e) {
                    //To do
                }
            });
            // var oTable1 = sap.ui.core.Fragment.byId("openD1", "table3");
            oTable1.removeSelections(true);
            this.oDialog.close();
            this.byId("secondTable").getBinding("items").refresh();
            // this. onInit();

            var tab = this.getView().byId("table0001");
            var bind = tab.getBinding("items");
            this.byId("table0001").getBinding("items").refresh();

             

       
    },
    onCreate2:function(){
        debugger;
        var oTable1 = sap.ui.core.Fragment.byId("openD2", "table4");
        var oView = this.getView();
        var that = this;
       
       

         var aArray = [];
       
       
        var aItems = oTable1.getSelectedItems();
        for(var i = 0; i < aItems.length; i++){
            var visible = aItems[i].getAggregation("cells")[0].getProperty("visible");
             if(aItems[i].getAggregation("cells")[0].getProperty("visible")==visible){
                var SID = aItems[i].getAggregation("cells")[0].getProperty("text");
                var Sname =aItems[i].getAggregation("cells")[1].getProperty("text");
                 var  PID= aItems[i].getAggregation("cells")[2].getProperty("text");
               var qua = aItems[i].getAggregation("cells")[3].getProperty("text");
             var description =  aItems[i].getAggregation("cells")[4].getProperty("text");


             var Payload = {};
             Payload.Supplierid = SID;
             Payload.Productid = PID;
             Payload.Suppliername = Sname;
             Payload.Description = description;
             Payload.Quantity = qua; 

             var oModel = this.getOwnerComponent().getModel();
             oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
             oModel.setUseBatch(true);
             oModel.create("/SUPPLIERSet", Payload, {
                method: "POST",
                success: function(data) {
                //   alert("Sucess!!!");
                },
                error: function(e) {
    
                }
            });

               }
            }

            oModel.submitChanges({
                success: function(data, response) {
                    //To do
                    // alert("Success");
                    sap.m.MessageBox.success("Created Successfully");
                   
                },
                error: function(e) {
                    //To do
                }
            });
            // var oTable1 = sap.ui.core.Fragment.byId("openD1", "table3");
            oTable1.removeSelections(true);
            this.oDialog2.close();
            this.byId("thirdTable").getBinding("items").refresh();
            this.byId("table0001").getBinding("items").refresh();
             


    },
    beforebindTableExtension:function(){
        debugger;
        console.log("Success");
        id = 'LPO1';

        var fragmentId = this.getView().createId("fr1");
        var tab = Fragment.byId(fragmentId, "table3");


        

       


    },
    onSelect:function(oControlEvent){
        debugger;
        var id = "LP101";
        var id2 = "APPLE MAC BOOK VENDOR";
        var icont = this.getView().byId('idIconTabBarMulti1').getSelectedKey();
        var tab = oControlEvent.getSource();
        var text= oControlEvent.mParameters.key;

        var otable1 = this.getView().byId("secondTable");
       var bind1 =  otable1.getBinding("items");

       var otable2 = this.getView().byId("thirdTable");
       var bind2 =  otable2.getBinding("items");

       var tab = this.getView().byId("table0001");
       var bind = tab.getBinding("items");




      
        var oFilterName = new sap.ui.model.Filter("Productid",
        sap.ui.model.FilterOperator.Contains, id);

        var aFilter = [];
        aFilter.push(oFilterName);

        
        bind1.filter(aFilter);
       
       
        var oFilterName2 = new sap.ui.model.Filter("Description",
        sap.ui.model.FilterOperator.Contains, id2);

        var aFilter2 = [];
        aFilter2.push(oFilterName2);

        
        bind2.filter(aFilter2);
       

   
        
      

        
},
    onEdit3:function(){
        debugger;
        alert("Success");
    },
    onclisk:function(){
        debugger;
        alert("Success");
    },
    
    
       
        
    
    onOpenDialog:function(oEvent) {
        debugger;
        if(!this.oDialog) {
           this.oDialog =  sap.ui.xmlfragment("openD1","listreport4.ext.fragment.ValueHelpDialogBasic", this );
           this.getView().addDependent(this.oDialog);
        }

        this.oDialog.open();
       
           
        
        

     },

     dialog:function(oEvent){
         debugger;
         if(!this.oDialog) {
            this.oDialog =  sap.ui.xmlfragment("openD1","listreport4.ext.fragment.ValueHelpDialogBasic", this );
            this.getView().addDependent(this.oDialog);
         }

         this.oDialog.open();


     },
     onOpenDialog2:function(){
         debugger;
        if(!this.oDialog2) {
            this.oDialog2 =  sap.ui.xmlfragment("openD2","listreport4.ext.fragment.supplierData", this );
            this.getView().addDependent(this.oDialog2);
         }

         this.oDialog2.open();

     },
     onClose2:function(){
         debugger;
         this.oDialog2.close();

     },
     onInit:function(){
        //  debugger;
         var oJSONModel = new sap.ui.model.json.JSONModel();
         this.getOwnerComponent().setModel(oJSONModel, "myModel");

         var sUrl = "/sap/opu/odata/SAP/ZALR5_SRV/";
         var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
            oModel.read("/SUPPLIERSet", {
            success: function (data) {
           oJSONModel.setData({
            SUPPLIERSet: data.results
           });
        // alert("Success");
          }
  
        })

     }
    // onAdd:function(){
    //     debugger;
    //     // alert("Add");
    //     // var aCols = this.oColModel.getData().cols;
    //     this._oValueHelpDialog = sap.ui.xmlfragment("listreport4.ext.fragment.ValueHelpDialogBasic", this);
    //     this.getView().addDependent(this._oValueHelpDialog);

    //     this._oValueHelpDialog.getTableAsync().then(function (oTable) {
    //         oTable.setModel(this.oProductsModel);
    //         oTable.setModel(this.oColModel, "columns");

    //         if (oTable.bindRows) {
    //             oTable.bindAggregation("rows", "/SUPPLIERSet");
    //         }

    //         // if (oTable.bindItems) {
    //         //     oTable.bindAggregation("items", "/SUPPLIERSet", function () {
    //         //         return new ColumnListItem({
    //         //             cells: aCols.map(function (column) {
    //         //                 return new Label({ text: "{" + column.template + "}" });
    //         //             })
    //         //         });
    //         //     });
    //         // }
    //         // this._oValueHelpDialog.update();
    //     // }.bind(this));

    //     // this._oValueHelpDialog.setTokens(this._oMultiInput.getTokens());
    //     this._oValueHelpDialog.open();
    // },

		// onValueHelpCancelPress: function () {
		// 	this._oValueHelpDialog.close();
		// },

		// onValueHelpAfterClose: function () {
		// 	this._oValueHelpDialog.destroy();
        // },
        // onOpenDialog:function(){
    //     debugger;
    //     var oView = this.getView();

    //     if (!this.byId("openD1")) {
    //      sap.ui.core.Fragment.load({
    //          id:oView.getId(),
    //          name:"listreport4.ext.fragment.ValueHelpDialogBasic",
    //          controller:this
    //      }).then(function(oDialog){
    //         oView.addDependent(oDialog);

    //     //   oView.addDepenedent(oDialog);
    //       oDialog.open();
    //      });
    //     }else{
    //         this.byId("openD1").open();
    //     }
    //}

     //    switch(text) {
    //     case "seconTab":
          
    //       var oFilterName = new sap.ui.model.Filter("Productid",
    //           sap.ui.model.FilterOperator.Contains, id);

    //          var aFilter = [];
    //       aFilter.push(oFilterName);

        
    //      bind1.filter(aFilter);
    //       break;
    //     case "thirdTab":
    //         var oFilterName = new sap.ui.model.Filter("Productid",
    //           sap.ui.model.FilterOperator.Contains, id2);
        
    //          var aFilter = [];
    //              aFilter.push(oFilterName);
        
                
    //           bind2.filter(aFilter);
    //       break;
    //     default:
    //       alert("unknown");
    //   }
     // var data =    this.getOwnerComponent().getModel("data").getProperty("/dataSet2");
            // var desc = "APPLE MAC BOOK VENDOR";
            // var ndata=[]
            //      data.map((element,index)=>{
            //         if(element.Description === desc){
            //             ndata.push(element);
            //         }
            //      });
               
            //      this.getOwnerComponent().setModel(new sap.ui.model.json.JSONModel({dataSet2:ndata}),"data");

             // var oFilterName = new sap.ui.model.Filter("Productid"",
		// 		sap.ui.model.FilterOperator.Contains, id);

			
		// 	var oFilter = new sap.ui.model.Filter({
		// 		filters: [oFilterName],
		// 		and: false
		// 	});

		// 	var aFilter = [oFilter];

		// 	// var oList = this.getView().byId("table5");
		// 	tab.getBinding("items").filter(aFilter);

// sap.ui.controller("listreport4.ext.controller.ObjectPageExt", {
//     onClickSUPPLIERSet : function(oEvent) { 
//         alert('onClickSUPPLIERSet');
//     }
// });            
            

            

});
