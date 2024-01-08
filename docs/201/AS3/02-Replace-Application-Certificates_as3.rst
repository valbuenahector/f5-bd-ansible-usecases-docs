Use Case 02: Replace Application Certificates with AS3
======================================================

OVERVIEW
--------
Replace-Application-Certificates.yaml is a templated Ansible playbook that is used to demonstrate automation for managing certificates and keys used by your application services with AS3.

Being able to create and swap SSL Profiles on a BIG-IP to singular or multiple VIPs is extremely useful, especially in today’s world where SSL keys get leaked, systems and applications get hacked, certificates become stale or expire. This automated method allows a seamless process to create and change certificates based on need/demand.

This use case template will create a new application service (VIP) on the F5 BIG-IP that will use a custom key and certificate to terminate client's SSL connection. 

RUNNING THE TEMPLATE
--------------------
Running this template assumes that a F5 BIG-IP instance, necessary webservers and Ansible node are available.  

  1. Login to the Ansible host
    
  2. Change Directory in the Ansible Host to the use-cases repo previously downloaded

    .. code::
    
        cd ~/f5-bd-ansible-labs/201-F5-Advanced/AS3/02-Replace-Application-Certificates-AS3/


  3. Run the Ansible Playbook ‘Replace-Application-Certificates.yaml’:

    .. code::

        ansible-navigator run Replace-Application-Certificates.yaml --mode stdout


TESTING AND VALIDATION
----------------------

**CERTIFICATE VERIFICATION**

   **Access Using F5 UDF Console:**

   Using the External Client (UDF --> Components --> External Client --> Access --> Firefox)

      - In the Bookmarks bar you can select the ``Ansible Labs`` Folder and goto ``201 - Labs`` and Select ``Use Case 2`` 
      - OR within the browser you can browse to https://10.1.20.30:8081/
      - From a client browser, access the VIP on port 8081 to view the new self-signed certificate (https://10.1.20.30:8081)


**BIG-IP CONFIGURATION VERIFICATION**

This section is optional and for testing and verification purposes only. It assumes knowledge of how to operate BIG-IP commands and networking.

   **Access Using F5 UDF Console:**

   - BIG-IP - (In UDF --> Components --> BIG-IP --> Access --> TMUI)  - This will popup a webpage to access the F5 Login Page

      * Login to the BIG-IP instance
      * Navigate to Local Traffic --> Virtual Servers
      * View the deployed use case access VIP:port (8081)

   - Login information for the BIG-IP:
   
      * username: admin 
      * password: **found in the inventory hosts file**