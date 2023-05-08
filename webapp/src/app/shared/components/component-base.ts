import { ChangeDetectorRef, Injector } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { EditPageState } from "../enum/edit-page-state";
import * as $ from 'jquery';

export abstract class ComponentBase {
    router: Router;
    activeRoute: ActivatedRoute;
    cdr?: ChangeDetectorRef;
    tojsonf: any;
    constructor(injector: Injector) {
        this.router = injector.get(Router);
        this.activeRoute = injector.get(ActivatedRoute);
        let scope = this;

    }

    loadHostSettings(): void {
        const self = this;
    }
    reloadView(){
        this.cdr?.detectChanges();
    }
    getRouteData(key: string): any {
        return (this.activeRoute.data as any).value[key];
    }

    getRouteParam(key: string): any {
        return (this.activeRoute.params as any).value[key];
    }
    navigatePassParam(url: string, params: any, deepParams: any, skipLocationChange: boolean = true) {
        var array = [url];
        if (params) {
            array.push(params);
        }
        this.router.navigate(array, { queryParams: deepParams, skipLocationChange: skipLocationChange });
        if (params) {
            url = url + ';' + $.map(params, (v, k) => { return k.toString() + '=' + (v || '').toString(); }).join(';')
        }
        window.history.pushState('', '', url);
    }
    navigate(obj: any[]) {
        this.router.navigate(obj);
    }

    formatMoney(num: number) {
        if (num == 0) {
            return "0";
        }
        if (!num) {
            return '';
        }
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')+'đ'
    }

    round(num: number) {
        if (!num) {
            return undefined;
        }
        return Math.round(num * 100) / 100;
    }

    moneyTextToNumber(moneyText: string | null | undefined) {
        if (moneyText == '' || moneyText == null || moneyText === undefined) {
            return undefined;
        }

        return parseInt(moneyText.replace(/,/g, ''));
    }

    moneyTextToNumberF(moneyText: string | null | undefined) {
        if (moneyText == '' || moneyText == null || moneyText === undefined) {
            return undefined;
        }

        return parseFloat(moneyText.replace(/,/g, ''));
    }

    toNumber(text: string) {
        return parseInt(text);
    }

    valueInRange(item: any, propName: string, maxValue: number, minValue: number = 0) {
        if (!item || item && !item[propName])
            item[propName] = minValue

        if (item[propName] > maxValue) {
            item[propName] = maxValue;
        } else if (item[propName] < minValue) {
            item[propName] = minValue;
        }
    }

    valueInRange2(item: any, propName: string, target: { min: string; max: string; }) {
        let minValue = parseInt(target.min);
        let maxValue = parseInt(target.max);
        this.valueInRange(item, propName, maxValue, minValue);
    }

    onChangeValueGreaterThan(item: { [x: string]: any; }, propName: string | number, valueGreater: number, $event: { target: { value: string; }; }) {
        item[propName] = (!$event.target.value || parseInt($event.target.value) < valueGreater) ? valueGreater : $event.target.value;
        $event.target.value = item[propName];
    }

    isNull(value: string | number) {
        if (value === 0 || value === '0') {
            return false;
        }
        return !value;
    }

    normallizePropertyName(name: string){
        var fullName = name.split("_");
        if(fullName.length > 1){

            var prefix = fullName[0].toLowerCase();
            prefix = prefix.slice(0, prefix.length - 1) + prefix.charAt(prefix.length - 1).toUpperCase();
            fullName[0] = prefix;
        }
        else{
            fullName[0] = fullName[0].toLowerCase()
        }
        return fullName.join("_");
    }

    sumFunct(a: any, b: any) {
        return a + b;
    }

    /** Tạo random id */
    generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    /** So sánh ngày */
    compareDate(less: moment.Moment, greater: moment.Moment, equals = false) {
        if (!less || !greater) {
            return true;
        }
        if (equals) {
            return less.diff(greater) <= 0
        }
        return less.diff(greater) < 0
    }
    getMonthAndYearCombobox() {
        var result = [];
        var numYear = 1990;
        while (numYear <= 2100) {
            for (var i = 1; i <= 12; i++) {
                result.push({
                    value: i + '/' + numYear,
                    display: i + '/' + numYear
                })
                // var object = {};
                // object['date'] = i + '/' + numYear;
            }

            numYear += 1;
        }
        return result;
    }
    datediff (date1: moment.Moment,date2:moment.Moment)
    {
        var one =  moment(date1,'DD-MM-YYYY');
        var two = moment(date2,'DD-MM-YYYY');
        return one.diff(two,'days')
    }
   
}
