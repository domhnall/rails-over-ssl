# rails-over-ssl

This repo contains the example application which was constructed to
support the VectorLogic blog post:

https://www.vector-logic.com/blog/posts/rails-development-ssl-service-workers-and-self-signed-certs

which explores how we can run our Rails app over HTTPS in our local
development environment.

This is a skeleton Rails 7.0.4 app. To support HTTPS traffic you can run
the server as:

> WITH_SSL=true bin/rails server

Setting the environment flag will do two things:
* Configure Rails to run with `force_ssl` flag to be `true`
* Start the puma webserver, listening for SSL connections on port 3001,
  and configured with an SSL cert and key from dircectory `/config/ssl`

You will need to also add a record to your `/etc/hosts` file to map the
subdomain `dev.vector-logic.com` to localhost:

```
127.0.0.1       dev.vector-logic.com
```

Now with the webserver running you should be able to navigate to 

https://dev.vector-logic.com:3001

And the application will load over HTTPS. However you will likely see a
warning in your browser that the Certificate Authority is not trusted.
This same warning/error will prevent our service worker scripts from
downloading.
To resolve this final issue you will need to import the CA root
certificate, at `config/ssl/my_cert_authority.pem`, to your browser.


**Note** A fair proportion of the blog post discusses how we can generate
and use self-signed certificates. However, I have included these existing
certs in the repo for anyone who wishes to explore the concepts without
generating their own certs.
