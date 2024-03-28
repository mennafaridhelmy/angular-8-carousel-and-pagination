import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { PaginationValue } from "./components/pagination/pagination.component";

export interface PaginatedResponse<T> {
  items: any;
  total: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  // pagination start
  public pagination = { page: 1, pageSize: 10 };

  items = [
    {
      id: 1,
      firstName: "Sample_1",
      lastName: "Data_1",
      birthday: "2022-03-23T00:00:00",
      mobileNumber: "09859387467",
      email: "email_1@gmail.com",
      createdOn: "2022-09-01T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-01T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 2,
      firstName: "Sample_2",
      lastName: "Data_2",
      birthday: "1999-01-11T00:00:00",
      mobileNumber: "09224782773",
      email: "email_2@gmail.com",
      createdOn: "2022-09-02T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-02T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 3,
      firstName: "Sample_3",
      lastName: "Data_3",
      birthday: "1969-10-12T00:00:00",
      mobileNumber: "09882331155",
      email: "email_3@gmail.com",
      createdOn: "2022-09-03T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-03T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 4,
      firstName: "Sample_4",
      lastName: "Data_4",
      birthday: "1975-07-17T00:00:00",
      mobileNumber: "09263243842",
      email: "email_4@gmail.com",
      createdOn: "2022-09-04T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-04T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 5,
      firstName: "Sample_5",
      lastName: "Data_5",
      birthday: "2000-10-02T00:00:00",
      mobileNumber: "09195999787",
      email: "email_5@gmail.com",
      createdOn: "2022-09-05T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-05T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 6,
      firstName: "Sample_6",
      lastName: "Data_6",
      birthday: "2019-12-22T00:00:00",
      mobileNumber: "09338991734",
      email: "email_6@gmail.com",
      createdOn: "2022-09-06T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-06T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 7,
      firstName: "Sample_7",
      lastName: "Data_7",
      birthday: "1994-05-20T00:00:00",
      mobileNumber: "09206960711",
      email: "email_7@gmail.com",
      createdOn: "2022-09-07T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-07T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 8,
      firstName: "Sample_8",
      lastName: "Data_8",
      birthday: "1976-01-11T00:00:00",
      mobileNumber: "09916041811",
      email: "email_8@gmail.com",
      createdOn: "2022-09-08T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-08T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 9,
      firstName: "Sample_9",
      lastName: "Data_9",
      birthday: "1970-11-11T00:00:00",
      mobileNumber: "09709560785",
      email: "email_9@gmail.com",
      createdOn: "2022-09-09T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-09T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 10,
      firstName: "Sample_10",
      lastName: "Data_10",
      birthday: "1992-06-08T00:00:00",
      mobileNumber: "09707076988",
      email: "email_10@gmail.com",
      createdOn: "2022-09-10T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-10T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 11,
      firstName: "Sample_11",
      lastName: "Data_11",
      birthday: "1997-02-27T00:00:00",
      mobileNumber: "09849474865",
      email: "email_11@gmail.com",
      createdOn: "2022-09-11T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-11T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 12,
      firstName: "Sample_12",
      lastName: "Data_12",
      birthday: "1976-02-11T00:00:00",
      mobileNumber: "09442179683",
      email: "email_12@gmail.com",
      createdOn: "2022-09-12T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-12T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 13,
      firstName: "Sample_13",
      lastName: "Data_13",
      birthday: "1997-12-11T00:00:00",
      mobileNumber: "09101506088",
      email: "email_13@gmail.com",
      createdOn: "2022-09-13T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-13T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 14,
      firstName: "Sample_14",
      lastName: "Data_14",
      birthday: "1969-10-11T00:00:00",
      mobileNumber: "09688603787",
      email: "email_14@gmail.com",
      createdOn: "2022-09-14T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-14T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 15,
      firstName: "Sample_15",
      lastName: "Data_15",
      birthday: "2022-03-09T00:00:00",
      mobileNumber: "09905966339",
      email: "email_15@gmail.com",
      createdOn: "2022-09-15T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-15T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 16,
      firstName: "Sample_16",
      lastName: "Data_16",
      birthday: "2016-06-27T00:00:00",
      mobileNumber: "09895534325",
      email: "email_16@gmail.com",
      createdOn: "2022-09-16T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-16T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 17,
      firstName: "Sample_17",
      lastName: "Data_17",
      birthday: "1967-11-29T00:00:00",
      mobileNumber: "09839769278",
      email: "email_17@gmail.com",
      createdOn: "2022-09-17T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-17T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 18,
      firstName: "Sample_18",
      lastName: "Data_18",
      birthday: "1981-10-24T00:00:00",
      mobileNumber: "09332395632",
      email: "email_18@gmail.com",
      createdOn: "2022-09-18T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-18T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 19,
      firstName: "Sample_19",
      lastName: "Data_19",
      birthday: "1995-08-07T00:00:00",
      mobileNumber: "09485348028",
      email: "email_19@gmail.com",
      createdOn: "2022-09-19T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-19T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 20,
      firstName: "Sample_20",
      lastName: "Data_20",
      birthday: "1983-09-10T00:00:00",
      mobileNumber: "09239391400",
      email: "email_20@gmail.com",
      createdOn: "2022-09-20T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-20T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 21,
      firstName: "Sample_21",
      lastName: "Data_21",
      birthday: "1984-10-04T00:00:00",
      mobileNumber: "09302708798",
      email: "email_21@gmail.com",
      createdOn: "2022-09-21T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-21T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 22,
      firstName: "Sample_22",
      lastName: "Data_22",
      birthday: "2003-01-07T00:00:00",
      mobileNumber: "09264348358",
      email: "email_22@gmail.com",
      createdOn: "2022-09-22T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-22T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 23,
      firstName: "Sample_23",
      lastName: "Data_23",
      birthday: "2016-01-09T00:00:00",
      mobileNumber: "09822801555",
      email: "email_23@gmail.com",
      createdOn: "2022-09-23T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-23T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 24,
      firstName: "Sample_24",
      lastName: "Data_24",
      birthday: "1992-12-03T00:00:00",
      mobileNumber: "09139217861",
      email: "email_24@gmail.com",
      createdOn: "2022-09-24T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-24T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 25,
      firstName: "Sample_25",
      lastName: "Data_25",
      birthday: "1993-08-04T00:00:00",
      mobileNumber: "09769454489",
      email: "email_25@gmail.com",
      createdOn: "2022-09-25T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-25T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 26,
      firstName: "Sample_26",
      lastName: "Data_26",
      birthday: "1999-06-27T00:00:00",
      mobileNumber: "09524233838",
      email: "email_26@gmail.com",
      createdOn: "2022-09-26T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-26T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 27,
      firstName: "Sample_27",
      lastName: "Data_27",
      birthday: "1979-07-23T00:00:00",
      mobileNumber: "09529400560",
      email: "email_27@gmail.com",
      createdOn: "2022-09-27T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-27T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 28,
      firstName: "Sample_28",
      lastName: "Data_28",
      birthday: "2022-08-12T00:00:00",
      mobileNumber: "09742534153",
      email: "email_28@gmail.com",
      createdOn: "2022-09-28T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-28T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 29,
      firstName: "Sample_29",
      lastName: "Data_29",
      birthday: "1993-07-30T00:00:00",
      mobileNumber: "09852158514",
      email: "email_29@gmail.com",
      createdOn: "2022-09-29T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-29T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 30,
      firstName: "Sample_30",
      lastName: "Data_30",
      birthday: "1988-06-18T00:00:00",
      mobileNumber: "09698668315",
      email: "email_30@gmail.com",
      createdOn: "2022-09-30T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-09-30T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 31,
      firstName: "Sample_31",
      lastName: "Data_31",
      birthday: "1994-12-02T00:00:00",
      mobileNumber: "09336496835",
      email: "email_31@gmail.com",
      createdOn: "2022-10-01T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-01T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 32,
      firstName: "Sample_32",
      lastName: "Data_32",
      birthday: "1997-08-01T00:00:00",
      mobileNumber: "09653129346",
      email: "email_32@gmail.com",
      createdOn: "2022-10-02T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-02T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 33,
      firstName: "Sample_33",
      lastName: "Data_33",
      birthday: "1970-04-20T00:00:00",
      mobileNumber: "09219374595",
      email: "email_33@gmail.com",
      createdOn: "2022-10-03T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-03T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 34,
      firstName: "Sample_34",
      lastName: "Data_34",
      birthday: "1976-02-28T00:00:00",
      mobileNumber: "09702429532",
      email: "email_34@gmail.com",
      createdOn: "2022-10-04T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-04T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 35,
      firstName: "Sample_35",
      lastName: "Data_35",
      birthday: "2013-05-07T00:00:00",
      mobileNumber: "09417612235",
      email: "email_35@gmail.com",
      createdOn: "2022-10-05T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-05T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 36,
      firstName: "Sample_36",
      lastName: "Data_36",
      birthday: "1964-02-14T00:00:00",
      mobileNumber: "09886426845",
      email: "email_36@gmail.com",
      createdOn: "2022-10-06T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-06T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 37,
      firstName: "Sample_37",
      lastName: "Data_37",
      birthday: "2020-01-31T00:00:00",
      mobileNumber: "09966682868",
      email: "email_37@gmail.com",
      createdOn: "2022-10-07T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-07T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 38,
      firstName: "Sample_38",
      lastName: "Data_38",
      birthday: "2001-05-21T00:00:00",
      mobileNumber: "09253463516",
      email: "email_38@gmail.com",
      createdOn: "2022-10-08T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-08T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 39,
      firstName: "Sample_39",
      lastName: "Data_39",
      birthday: "1975-08-15T00:00:00",
      mobileNumber: "09929027194",
      email: "email_39@gmail.com",
      createdOn: "2022-10-09T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-09T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 40,
      firstName: "Sample_40",
      lastName: "Data_40",
      birthday: "2000-04-14T00:00:00",
      mobileNumber: "09897735523",
      email: "email_40@gmail.com",
      createdOn: "2022-10-10T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-10T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 41,
      firstName: "Sample_41",
      lastName: "Data_41",
      birthday: "1975-11-27T00:00:00",
      mobileNumber: "09651568034",
      email: "email_41@gmail.com",
      createdOn: "2022-10-11T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-11T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 42,
      firstName: "Sample_42",
      lastName: "Data_42",
      birthday: "2006-11-12T00:00:00",
      mobileNumber: "09477198669",
      email: "email_42@gmail.com",
      createdOn: "2022-10-12T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-12T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 43,
      firstName: "Sample_43",
      lastName: "Data_43",
      birthday: "2016-01-31T00:00:00",
      mobileNumber: "09425735510",
      email: "email_43@gmail.com",
      createdOn: "2022-10-13T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-13T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 44,
      firstName: "Sample_44",
      lastName: "Data_44",
      birthday: "1995-04-15T00:00:00",
      mobileNumber: "09754016341",
      email: "email_44@gmail.com",
      createdOn: "2022-10-14T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-14T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 45,
      firstName: "Sample_45",
      lastName: "Data_45",
      birthday: "1996-02-06T00:00:00",
      mobileNumber: "09478402288",
      email: "email_45@gmail.com",
      createdOn: "2022-10-15T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-15T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 46,
      firstName: "Sample_46",
      lastName: "Data_46",
      birthday: "1973-06-21T00:00:00",
      mobileNumber: "09469474334",
      email: "email_46@gmail.com",
      createdOn: "2022-10-16T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-16T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 47,
      firstName: "Sample_47",
      lastName: "Data_47",
      birthday: "2019-05-29T00:00:00",
      mobileNumber: "09556898071",
      email: "email_47@gmail.com",
      createdOn: "2022-10-17T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-17T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 48,
      firstName: "Sample_48",
      lastName: "Data_48",
      birthday: "2005-02-01T00:00:00",
      mobileNumber: "09687722922",
      email: "email_48@gmail.com",
      createdOn: "2022-10-18T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-18T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 49,
      firstName: "Sample_49",
      lastName: "Data_49",
      birthday: "2017-09-24T00:00:00",
      mobileNumber: "09405758356",
      email: "email_49@gmail.com",
      createdOn: "2022-10-19T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-19T19:25:29.4033333",
      lastModifiedBy: "System",
    },
    {
      id: 50,
      firstName: "Sample_50",
      lastName: "Data_50",
      birthday: "1987-01-28T00:00:00",
      mobileNumber: "09485074117",
      email: "email_50@gmail.com",
      createdOn: "2022-10-20T19:25:29.4033333",
      createdBy: "System",
      lastModified: "2022-10-20T19:25:29.4033333",
      lastModifiedBy: "System",
    },
  ];
  public visibleItems: PaginatedResponse<number> = {
    items: this.items.slice(0, 10),
    total: this.items.length,
  };

  ngOnInit(): void {}

  public onPageChange(pagination: PaginationValue): void {
    const startIndex = (pagination.page - 1) * pagination.pageSize;

    const items = this.items.slice(
      startIndex,
      startIndex + pagination.pageSize
    );

    this.visibleItems = { items, total: this.items.length };
    console.log('maslaaaaaaaaaaaaaaaaaan ngeeeeee7t');
  }

  // pagination end


  // carousel start 

  // carousel end 
}
