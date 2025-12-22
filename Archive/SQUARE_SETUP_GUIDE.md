# Square Payment Setup Guide for Forest City Laser

## Overview
This guide will help you set up Square payments on your Forest City Laser website. The payment page has been created and is ready for configuration.

## Step 1: Create Square Developer Account

1. Go to [Square Developer Dashboard](https://developer.squareup.com/)
2. Sign in with your existing Square account or create a new one
3. Create a new application for "Forest City Laser Website"

## Step 2: Get Your Credentials

You'll need two key pieces of information:

### For Testing (Sandbox)
- **Application ID**: Found in your Square Developer Dashboard under your app
- **Location ID**: Found in the "Locations" section of your dashboard

### For Production (Live Payments)
- **Application ID**: Same as sandbox but for production environment
- **Location ID**: Your actual business location ID

## Step 3: Update Your Website Code

In the `payments.html` file, find this line (around line 140):
```javascript
const payments = Square.payments('YOUR_SQUARE_APPLICATION_ID', 'YOUR_LOCATION_ID');
```

Replace:
- `YOUR_SQUARE_APPLICATION_ID` with your actual Application ID
- `YOUR_LOCATION_ID` with your actual Location ID

## Step 4: Switch to Production

When ready for live payments:

1. Change the Square SDK URL from sandbox to production:
   ```html
   <!-- Change this: -->
   <script src="https://sandbox-web.squarecdn.com/v1/square.js"></script>
   
   <!-- To this: -->
   <script src="https://web.squarecdn.com/v1/square.js"></script>
   ```

2. Update Google Pay environment from 'TEST' to 'PRODUCTION':
   ```javascript
   const googlePay = await payments.googlePay({
       environment: 'PRODUCTION'  // Change from 'TEST'
   });
   ```

## Step 5: Backend Payment Processing (Required)

**Important**: The current setup only handles the frontend. You need a backend server to process actual payments.

### Option A: Simple Backend with Square API
Create a server endpoint that:
1. Receives the payment token from your website
2. Makes a payment request to Square's Payments API
3. Returns success/failure to your website

### Option B: Use Square's Hosted Solutions
Consider Square Online or Square Invoices for simpler setup.

## Step 6: Testing

1. Use Square's test card numbers:
   - Visa: `4111 1111 1111 1111`
   - Mastercard: `5555 5555 5555 4444`
   - Any future expiry date and CVV

2. Test different scenarios:
   - Successful payments
   - Declined cards
   - Different amounts

## Step 7: Security Considerations

1. **SSL Certificate**: Ensure your website has HTTPS
2. **PCI Compliance**: Square handles card data, but follow their guidelines
3. **Environment Variables**: Store credentials securely (not in code)

## Step 8: Go Live Checklist

- [ ] SSL certificate installed
- [ ] Production credentials configured
- [ ] Backend payment processing implemented
- [ ] Test payments completed successfully
- [ ] Square account verified and approved
- [ ] Webhook endpoints configured (optional)

## Current Features Included

✅ **Frontend Payment Form**
- Amount input
- Customer email
- Invoice/order number reference
- Notes field

✅ **Payment Methods**
- Credit/debit cards
- Google Pay
- Apple Pay

✅ **User Experience**
- Loading states
- Success/error messages
- Mobile responsive design
- Matches your website branding

## Need Help?

- **Square Documentation**: https://developer.squareup.com/docs/web-payments/overview
- **Square Support**: Available through your Square Dashboard
- **Technical Issues**: Contact your web developer

## Fees

Square's standard processing fees apply:
- 2.6% + 10¢ for in-person transactions
- 2.9% + 30¢ for online transactions
- Check Square's current pricing for Canadian rates

---

**Next Steps**: 
1. Create your Square Developer account
2. Get your credentials
3. Update the payment form with your actual IDs
4. Implement backend payment processing
5. Test thoroughly before going live 