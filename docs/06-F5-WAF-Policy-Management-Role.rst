Use Case 06: F5 WAF (XML) Policy Management in a Role
=================================================

OVERVIEW
--------

F5-WAF-Policy-Management-Role.yaml is a templated Ansible Role to manage blocked IP addresses and URL's on F5 ASM through Ansible automation. 

Web Application Firewalls work to protect web applications by inspecting incoming traffic, blocking bots, SQL injection, Cross Site Scripting and a host of other attacks. 
This playbook is designed to demonstrate a basic WAF scenario to create and modify an F5 WAF (ASM) policy to block URL(s) or IP address(s) or both. 

Using this role, other security vendors or even ticketing based solutions like Service NOW, users will be able to create a start to finish automated solution based on when attacks can occur.


RUNNING THE TEMPLATE
--------------------
Running this template assumes that a F5 BIG-IP instance, necessary webservers and Ansible node are available.  
To deploy a sandbox infrastructure in AWS users can use the `F5 Ansible Provisioner <https://github.com/f5devcentral/FAS-provisioner>`__

1. Login to the Ansible host

2. Change Directory in the Ansible Host to the use-cases repo previously downloaded

   .. code::
   
      cd ~/FAS-ansible-use-cases/06-F5-WAF-Policy-Management-Role/


3. (Optional) Edit 'f5_vars.yml' file to customize your variables. Here you can add/remove IP addresses and URLs from the 'Blocked_IPs' and 'Blocked_URLs' list

4. Launch the Ansible playbook 'F5-WAF-Policy-Management-Role.yaml' with the variable file ‘f5_vars.yml’:

   .. code::

      ansible-playbook F5-WAF-Policy-Management-Role.yaml -e @f5_vars.yml


This template will configure the F5 BIG-IP to provision the `WAF module <https://www.f5.com/products/security/advanced-waf>`__, create a Virtual IP (VIP) including a Pool and nodes, a WAF policy for the use case, then modify the policy to block IP’s and URL’s.

.. note::

   This Playbook modifies the provisioning of modules on the BIG-IP and will take some time to complete as the new module comes online. This Playbook detects if blocked URL or IP already exists and only add what is new (idempotency).  
  
TESTING AND VALIDATION
-------------------------
**VERIFYING WAF POLICY ENFORCEMENT:**

- From a client brower, access the application through the virtual address on the F5 BIG-IP.
- To access this site externally you will need to use the instructor inventory studentX-f5 IP Address which will be refered as (F5-BIG-IP-Public-IP) below.
- From a client browser, access the F5-BIG-IP-Public-IP on port 8084 to view the webpage to validate accessibility (http://F5-BIG-IP-Public-IP:8084)
- Access the URL's present in the f5_vars.yml file to see the WAF policy in action

  - https://F5-BIG-IP-Public-IP:8084/blocked.html

  - https://F5-BIG-IP-Public-IP:8084/hacked.html

  - https://F5-BIG-IP-Public-IP:8084/robot.txt


**BIG-IP CONFIGURATION VERIFICATION:**

This section is optional and for testing and verification purposes only. It assumes knowledge of how to operate BIG-IP commands and networking.

- Login to the BIG-IP

- Navigate to Security->Application security to view the WAF policy deployed

- Navigate to Local traffic->Virtual server

- View the deployed use case access VIP:port (8084)

