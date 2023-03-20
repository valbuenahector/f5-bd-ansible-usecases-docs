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

  **Provisioner**

  - From a client brower, access the application through the virtual address on the F5 BIG-IP.
  - To access this site externally you will need to use the instructor inventory - studentX-f5 IP Address which will be refered as (F5-BIG-IP-Public-IP) below.
  - From a client browser, access the VIP on port 8081 to view the new self-signed certificate (https://F5-BIG-IP-Public-IP:8081)

  **UDF**

  Using the Win10 External Client (UDF --> Components --> Win10 - External Client --> Access --> RDP)

  - Login with the administrator account with password located at (UDF --> Components --> Win10 - External Client --> Details --> Details Tab )
  - Launch Web Browser from within the (Win10 - External Client) to test and validate connections 
  - From a client browser, access the VIP on port 8081 to view the new self-signed certificate (https://10.1.20.30:8081)
|

**BIG-IP CONFIGURATION VERIFICATION**

This section is optional and for testing and verification purposes only. It assumes knowledge of how to operate BIG-IP commands and networking.

  **Provisioner**

  BIG-IP - (https://F5-BIG-IP-Public-IP:8443) - get the F5-BIG-IP-Public-IP from
  instructor_inventory file in provisioning host.

  - Login to the BIG-IP instance 
  - Navigate to Local Traffic --> Virtual Servers
  - View the deployed use case access VIP:port (8081)

  **UDF**

  BIG-IP - (In UDF --> Components --> BIG-IP --> Access --> TMUI)  - This will popup
  a webpage to access the F5 Login Page

  - Login to the BIG-IP instance
  - Navigate to Local Traffic --> Virtual Servers
  - View the deployed use case access VIP:port (8081)

  .. hint::

    Username is admin and the Password would be the Password given in the Linklight Lab or UDF Lab
