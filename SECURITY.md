# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Firefly Energy Distributor Platform seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **security@fireflyenergy.com** (or your designated security contact)

Include the following information in your report:

- Type of vulnerability (e.g., SQL injection, XSS, authentication bypass)
- Full paths of source file(s) related to the manifestation of the vulnerability
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the vulnerability, including how an attacker might exploit it

### What to Expect

After you submit a report, you can expect:

1. **Acknowledgment**: We'll acknowledge your email within 48 hours
2. **Updates**: We'll send you regular updates about our progress
3. **Verification**: We may ask for additional information or guidance
4. **Disclosure**: We'll work with you to understand and resolve the issue before any public disclosure

### Security Best Practices for Users

When deploying this platform:

1. **Environment Variables**: Never commit `.env` files or expose API keys
2. **Database Security**: Use strong passwords and enable SSL for database connections
3. **API Keys**: Rotate OpenAI API keys regularly and use separate keys for dev/prod
4. **Authentication**: Implement proper user authentication before deployment
5. **HTTPS**: Always use HTTPS in production environments
6. **Updates**: Keep dependencies updated using `npm audit` and `npm update`

### Known Security Considerations

- PostgreSQL database credentials should be stored securely
- OpenAI API keys have usage quotas and should be monitored
- Demo mode should not be used in production without proper authentication
- Rate limiting should be implemented for production APIs

## Disclosure Policy

When we receive a security bug report, we will:

1. Confirm the problem and determine affected versions
2. Audit code to find any similar problems
3. Prepare fixes for all supported versions
4. Release patches as soon as possible

We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.
