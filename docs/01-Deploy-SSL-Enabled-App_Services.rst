Use-Case 01: Deploy SSL enabled App-service
===========================================

OVERVIEW
--------

Deploy-SSL-Enabled-App_Services.yaml is a templated Ansible playbook that
demonstrates configuring SSL termination and SSL re-direct for your application
on F5 BIG-IP with one Ansible command. 

Using this template, we will create an SSL enabled (on port 443) application
service (Virtual IP or VIP) on F5 BIG-IP and also create the associative Port
80 SSL redirect for that Virtual IP. If there is an already existing
application service (VIP) that was previously deployed without SSL (a very
common scenario), this template will also enable SSL (open SSL port) on that
Virtual IP address.

The certificates used in this template for SSL termination are self-signed
certs that are generated on the BIG-IP. Users will be able to swap out the
self-signed certs very easily and we will demonstrate how with the
'certificate-replacement' template that will follow.

RUN THE TEMPLATE
----------------

Running this template assumes that a F5 BIG-IP instance, necessary webservers
and Ansible node are available. 

1. Login to the Ansible Host

2. Change Directory in the Ansible Host to the use-cases repo previously
   downloaded/cloned:

   .. code:: bash
   
      cd ~/f5-bd-ansible-labs/201-F5-Advanced/Modules/01-Deploy-SSL-Enabled-App_Services/


3. **(Optional)** Edit 'f5_vars.yml' file to customize the existing variables.
   For example: F5_VIP_Name: ‘Use-Case-1-VIP'

4. Run the Ansible Playbook ‘Deploy-SSL-Enabled-App_Services.yaml’ with the
   variable file ‘f5_vars.yml’:

   .. code:: bash
   
      ansible-navigator run Deploy-SSL-Enabled-App_Services.yaml --mode stdout -e @f5_vars.yml

   In this example, the playbook looks for F5_VIP_Name: ‘Use-Case-1-VIP’ as
   specified in the f5_vars.yaml variable file and creates a app-service named
   'Use-Case-1-VIP' with both port '80' and port '443' enabled.

.. attention::

   This will loop through the entire application list on the BIG-IP to ensure
   there are no duplicates. So, this could take time depending on the number of
   Virtual-IPs on your F5 BIG-IP

TESTING AND VALIDATION
-----------------------

**VERIFYING RE-DIRECT SERVICE:**

From a client brower, access the application through the virtual address on the
F5 BIG-IP.

- To access this site externally you will need to use the instructor inventory
  studentX-f5 IP Address which will be refered as (F5-BIG-IP-Public-IP) below.
- If you try to access application on F5-BIG-IP-Public-IP:80
  (http://F5-BIG-IP-Public-IP:80), you will be redirected to 443. 
- The same webpage will also be accessible via F5-BIG-IP-Public-IP:443
  (https://F5-BIG-IP-Public-IP:443)

.. note::

   Your browser is presented with a certificate (clientssl cert) that is built
   with the BIG-IP.
   
   You will therefore see an `unsafe` message from your browser which is
   expected in this demo. Click proceed to website.

|

**BIG-IP CONFIGURATION VERIFICATION:**

This section is optional and for testing and verification purposes only. It
assumes knowledge of how to operate BIG-IP commands and networking.

BIG-IP - (https://F5-BIG-IP-Public-IP:8443) - get the F5-BIG-IP-Public-IP from
instructor_inventory file in provisioning host.

- Login to the BIG-IP instance
- Navigate to Local Traffic --> Virtual Servers
- Ensure there are 2 VIPs with same IP

  - One listening on port 443
  - One listening on port 80

.. hint::

   Username is admin and the Password would be part of the Linklight Lab
   password or in the f5_vars.yml file used to provision the lab.
