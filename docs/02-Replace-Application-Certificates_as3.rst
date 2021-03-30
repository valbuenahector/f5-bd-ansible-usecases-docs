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
To deploy a sandbox infrastructure in AWS users can use the `Ansible Workshops <https://github.com/ansible/workshops>`__
1. Login to the Ansible host
   
2. Change Directory in the Ansible Host to the use-cases repo previously downloaded

   .. code::
   
      cd ~/f5-bd-ansible-usecases/AS3/02-Replace-Application-Certificates-AS3/


3. Run the Ansible Playbook ‘Replace-Application-Certificates.yaml’:

   .. code::

      ansible-playbook Replace-Application-Certificates.yaml


4. Verify the F5 Configuration

BIG-IP - (https://F5-BIG-IP-Public-IP:8443) - get the F5-BIG-IP-Public-IP from instructor_inventory file in provisioning host.
- Login to the BIG-IP instance
- Change the Partition from Common to "Ansible Workshops"
- Navigate to Local traffic->Virtual server
- Ensure there should be a single VIP listening on port 8081

.. note::

   Username is Admin and the Password would be part of the Linklight Lab password or in the f5_vars.yml file used to provision the lab.

5. Verify the Website Availability

From a client brower, access the application through the virtual address on the F5 BIG-IP.
- From a client brower, access the application through the virtual address on the F5 BIG-IP.
- To access this site externally you will need to use the instructor inventory studentX-f5 IP Address which will be refered as (F5-BIG-IP-Public-IP) below.
- From a client browser, access the VIP on port 8081 to view the new self-signed certificate (https://F5-BIG-IP-Public-IP:8081)

.. note::

   Your browser is presented with a certificate (clientssl cert) that is imported from the AS3 play. You will therefore see an ‘unsafe’ message from your browser which is expected in this demo. Click proceed to website.


6. Before moving to the next usecase we need to remove the configuration as we are deploying these usecases as a separated Tenant.

   .. code::
   
      ansible-playbook delete.yml
