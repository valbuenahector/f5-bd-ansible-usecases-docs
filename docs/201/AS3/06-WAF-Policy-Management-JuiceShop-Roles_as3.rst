Use Case 06: WAF (XML) Policy Management in a Role with Juice Shop With AS3
===========================================================================

OVERVIEW
--------

WAF-Policy-Mangement-Role.yaml and JuiceShop-Docker-Deploy.yaml are Ansible
Roles to manage blocked IP addresses and URL's on F5 ASM through Ansible
automation using the Juice Shop website. 

Web Application Firewalls work to protect web applications by inspecting
incoming traffic, blocking bots, SQL injection, Cross Site Scripting and a host
of other attacks. This playbook is designed to demonstrate a basic WAF scenario
to create and modify an F5 WAF (ASM) policy to block URL(s) or IP address(s) or
both. 

Using this role, other security vendors or even ticketing based solutions like
Service NOW, users will be able to create a start to finish automated solution
based on when attacks can occur.

RUNNING THE TEMPLATE
--------------------

Running this template assumes that a F5 BIG-IP instance, necessary webservers
and Ansible node are available. 

   1. Login to the Ansible host

   2. Change Directory in the Ansible Host to the use-cases repo previously
      downloaded

      .. code:: bash
      
         cd ~/f5-bd-ansible-labs/201-F5-Advanced/AS3/06-WAF-Policy-Management-JuiceShop-Roles-AS3/

   3. Launch the Ansible playbook 'JuiceShop-Docker-Deploy.yaml' to build out the
      Juice Shop Docker container and NGINX proxy on each webserver node:

      .. code:: bash

         ansible-navigator run JuiceShop-Docker-Deploy.yaml --mode stdout

      .. attention::

         This can take up to 25 minutes due to installing docker and all of its
         sub-components, NGINX and the JuiceShop application on each webserver.

   4. Launch the Ansible playbook 'WAF-Policy-Management-Role.yaml' to
      implement the Blocked IPs and Blocked URLs policies on the Juice Shop
      webpages:

      .. code:: bash

         ansible-navigator run WAF-Policy-Management-Role.yaml --mode stdout

   5. **(Optional)** Block your Client IP Address with WAF

         You can use the IP address of the External Client Node to block which is "10.1.20.8"

         .. code:: bash

            ansible-navigator run Block-My-IP.yaml --mode stdout --extra-vars "my_ip_address=10.1.20.8"

         This template will gather your IP Address from your SSH connection and then add it to the existing WAF Policy and start blocking your IP so that when you browse port 8085 you will get a "Request Rejected" message.

      .. note::

         This Playbook modifies the provisioning of modules on the BIG-IP and will take some time to complete as the new module comes online.

      .. attention::

         This Playbook detects if blocked URL or IP already exists and only add what is new (idempotency).

TESTING AND VALIDATION
----------------------

**VERIFYING WAF POLICY ENFORCEMENT:**

   **Using F5 UDF:**

      Using the Win10 External Client (UDF --> Components --> Win10 - External Client --> Access --> RDP)

      - Login with the administrator account with password located at (UDF --> Components --> Win10 - External Client --> Details --> Details Tab )
      - Launch Web Browser to test and validate connections 
      - Access the URL's present in the f5_vars.yml file to see the WAF policy in action 

         - https://10.1.20.30:8085/blocked.html
         - https://10.1.20.30:8085/hacked.html
         - https://10.1.20.30:8085/robot.txt 


**BIG-IP CONFIGURATION VERIFICATION:**

This section is optional and for testing and verification purposes only. It assumes knowledge of how to operate BIG-IP commands and networking.

   **Using F5 UDF:**

      BIG-IP - (In UDF --> Components --> BIG-IP --> Access --> TMUI)  - This will popup a webpage to access the F5 Login Page

      - Login to the BIG-IP instance
      - Navigate to Security --> Application Security to view the WAF policy deployed
      - Navigate to Local Traffic --> Virtual Servers
      - View the deployed use case access F5-BIG-IP-Public-IP:port (8085)

   .. hint::

      Username is admin and the Password would be the Password given in the Linklight Lab or UDF Lab


**UDF Lab Revert**
-------------------------------

   Once you have completed this section it is recommended to go back to Use-Case 00 and run the restore of the BIG-IP before continuing to test the AS3 Section.