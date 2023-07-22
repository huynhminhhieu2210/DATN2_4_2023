using Abp.AspNetCore.Mvc.Controllers;
using asp.IService;
using asp.Models;
using asp.Models.common;
using asp.Momo;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace asp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CartsController : AbpController
    {
        private readonly ICartsService _cartService;
        public CartsController(ICartsService cartService)
        {
            this._cartService = cartService;
        }
        [HttpGet("{userlogin}")]
        public async Task<IEnumerable<INVOICE_DT>> CART_LOAD(string userlogin)
        {
            return await _cartService.CART_LOAD(userlogin);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> CART_UPDATE([FromBody] INVOICE input)
        {
            return await _cartService.CART_UPDATE(input);
        }
        [HttpPost]
        public async Task<IEnumerable<InsertResult>> CART_ADD_PRODUCT([FromBody] INPUTADDCART input)
        {
            return await _cartService.CART_ADD_PRODUCT(input);
        }
        [HttpPost]
        public async Task<IEnumerable<DeleteResult>> CART_DELETE(INPUTADDCART input)
        {
            return await _cartService.CART_DELETE(input);
        }
        [HttpPost]
        public async Task<IEnumerable<UpdateResult>> CART_CHECKOUT(INVOICE input)
        {
            return await _cartService.CART_CHECKOUT(input);
        }
        [HttpPost]
        public void Payment(INVOICE invoice)
        {
            //request params need to request to MoMo system
            string endpoint = "https://test-payment.momo.vn/gw_payment/transactionProcessor";
            string partnerCode = "MOMOSWUZ20220718";
            string accessKey = "SbPex1VxsN663Us7";
            string serectkey = "1sEPSrbZsA23ovgE8inUCpNEPrzM9SXw";
            string orderInfo = "Thanh toán đơn hàng";
            string returnUrl = "https://localhost:44358/Invoices/ConfirmPaymentClient";
            string notifyurl = "https://6de0-118-69-72-241.ap.ngrok.io/Invoices/SavePayment"; //lưu ý: notifyurl không được sử dụng localhost, có thể sử dụng ngrok để public localhost trong quá trình test

            string amount = invoice.TOTAL.ToString();
            string orderid = invoice.INVOICE_CODE;
            string requestId = invoice.INVOICE_CODE;
            //string requestId = DateTime.Now.Ticks.ToString();
            string extraData = "";

            //Before sign HMAC SHA256 signature
            string rawHash = "partnerCode=" +
                partnerCode + "&accessKey=" +
                accessKey + "&requestId=" +
                requestId + "&amount=" +
                amount + "&orderId=" +
                orderid + "&orderInfo=" +
                orderInfo + "&returnUrl=" +
                returnUrl + "&notifyUrl=" +
                notifyurl + "&extraData=" +
                extraData;

            MoMoSecurity crypto = new MoMoSecurity();
            //sign signature SHA256
            string signature = crypto.signSHA256(rawHash, serectkey);

            //build body json request
            JObject message = new JObject
            {
                { "partnerCode", partnerCode },
                { "accessKey", accessKey },
                { "requestId", requestId },
                { "amount", amount },
                { "orderId", orderid },
                { "orderInfo", orderInfo },
                { "returnUrl", returnUrl },
                { "notifyUrl", notifyurl },
                { "extraData", extraData },
                { "requestType", "captureMoMoWallet" },
                { "signature", signature }

            };

            string responseFromMomo = PaymentRequest.sendPaymentRequest(endpoint, message.ToString());
        }
    }
}
