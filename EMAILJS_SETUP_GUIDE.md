# EmailJS Setup Guide for Virtual CV Contact Form

This guide will help you set up EmailJS so your contact form sends emails to **lethabokmanamela@gmail.com**.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Once logged in, go to the **Email Services** page
2. Click **Add New Service**
3. Choose **Gmail** (recommended for your Gmail address)
4. Click **Connect Account** and sign in with your Google account (lethabokmanamela@gmail.com)
5. Give your service a name (e.g., "Gmail Service")
6. Copy the **Service ID** (you'll need this later)
7. Click **Create Service**

## Step 3: Create an Email Template

1. Go to the **Email Templates** page
2. Click **Create New Template**
3. Set up your template with the following content:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Message: {{subject}}

**Content (Body):**
```
You have received a new message from your Virtual CV contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your Virtual CV contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. In the **To Email** field, enter: `lethabokmanamela@gmail.com`
5. In the **From Name** field, enter: `{{from_name}}`
6. In the **Reply To** field, enter: `{{from_email}}` (this allows you to reply directly to the sender)
7. Copy the **Template ID** (you'll need this later)
8. Click **Save**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the EmailJS dashboard
2. Find your **Public Key** (it looks like a random string of characters)
3. Copy this key

## Step 5: Update Your Website Code

Open the file `js/script.js` and replace the following placeholders:

1. Replace `YOUR_PUBLIC_KEY` with your actual Public Key (from Step 4)
2. Replace `YOUR_SERVICE_ID` with your Service ID (from Step 2)
3. Replace `YOUR_TEMPLATE_ID` with your Template ID (from Step 3)

**Example:**
```javascript
// Before:
emailjs.init("YOUR_PUBLIC_KEY");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)

// After (with your actual values):
emailjs.init("abcd1234efgh5678");
emailjs.send("service_xyz123", "template_abc456", templateParams)
```

## Step 6: Test Your Contact Form

1. Open your `index.html` file in a web browser
2. Navigate to the Contact section
3. Fill out the form with test data
4. Click **Send Message**
5. You should see "Message sent successfully!" 
6. Check your email at lethabokmanamela@gmail.com for the test message

## Troubleshooting

### Not receiving emails?
- Check your spam/junk folder
- Verify all IDs are correct in `script.js`
- Check the browser console (F12) for any error messages
- Make sure you're connected to the internet

### Getting errors?
- Ensure you've verified your EmailJS account
- Check that your Gmail service is properly connected
- Make sure the template variables match exactly (case-sensitive)

### Free Plan Limits
- EmailJS free plan allows 200 emails per month
- If you need more, consider upgrading to a paid plan

## Security Note

Your EmailJS Public Key is safe to include in client-side code. However, keep your Private Key (if you have one) secure and never commit it to public repositories.

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

Once you complete these steps, your contact form will be fully functional and you'll receive all messages at lethabokmanamela@gmail.com!
